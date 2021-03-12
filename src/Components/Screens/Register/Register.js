import React, {useState} from "react"
import {Redirect, useHistory} from "react-router-dom"
import {
    RegisterFormButton,
    RegisterFormInput,
    RegisterForm,
    RegisterError,
    RegisterGrid, RegisterButtonsGrid
} from "../../../styles/ScreenStyles/Register/styles";
import {useMutation} from "@apollo/client";
import {REGISTER_USER} from "../../../graphql/mutation";
import Header from "../../Header";
import FooterComponent from "../../Footer";

export default function Register() {
    const history = useHistory()
    const [registerCredentials, setRegisterCredentials] = useState({
        lastName: "",
        firstName: "",
        email: "",
        organisation_name: "",
        CUI: ""
    })
    const [errorMsg, setError] = useState("")
    const [register, {data, loading}] = useMutation(REGISTER_USER)

    const handleChange = (event) => {
        const {name, value} = event.target
        setRegisterCredentials(prevState => ({...prevState, [name]: value})
        )
    }

    const registerUser = () => {
        register(
            {
                variables: {
                    last_name: registerCredentials.lastName,
                    first_name: registerCredentials.firstName,
                    email: registerCredentials.email,
                    organisation_name: registerCredentials.organisation_name,
                    CUI: registerCredentials.CUI
                }
            }).then(res => {
            localStorage.setItem("token", res.data.register.token)
            history.push("/setPassword&"+res.data.register.id+"&"+res.data.register.organisation_id)
            }).catch(err => setError(err.message))
    }

    if (data)
        return <Redirect to="/home"/>

    return <div>
        <Header app={false}/>
        <RegisterGrid>
            <RegisterForm>
                <RegisterFormInput name="lastName" placeholder="Last name" value={registerCredentials.lastName}
                                   onChange={handleChange}/>
                <RegisterFormInput name="firstName" placeholder="First name" onChange={handleChange}
                                   value={registerCredentials.firstName}/>
                <RegisterFormInput name="email" placeholder="Email" onChange={handleChange}
                                   value={registerCredentials.email}/>
                <RegisterFormInput name="organisation_name" placeholder="Organisation name" onChange={handleChange}
                                   value={registerCredentials.organisation_name}/>
                <RegisterFormInput name="CUI" placeholder="CUI" onChange={handleChange}
                                   value={registerCredentials.CUI}/>
                <RegisterButtonsGrid>
                    <RegisterFormButton onClick={event => {
                        event.preventDefault();
                        registerUser()
                    }}>Register</RegisterFormButton>
                </RegisterButtonsGrid>
                {loading ? <RegisterError>Loading</RegisterError> : null}
                {errorMsg ? <RegisterError>Error:{errorMsg}</RegisterError> : null}
            </RegisterForm>
        </RegisterGrid>
        <FooterComponent/>
    </div>
}