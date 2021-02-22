import React, {useState} from "react"
import {Redirect} from "react-router-dom"
import {ErrorP, Form, FormButton, FormInput} from "../styles/styles";
import {useMutation} from "@apollo/client";
import {REGISTER_USER} from "../graphql/mutation";
import Header from "./Header";
import FooterComponent from "./Footer";

export default function Register() {
    const [registerCredentials, setRegisterCredentials] = useState({
        lastName: "",
        firstName: "",
        email: "",
        password: ""
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
                    password: registerCredentials.password
                }
            }).then(res => localStorage.setItem("token", res.data.register.token)).catch(err => setError(err.message))
    }

    if (data)
        return <Redirect to="/home"/>

    return <div>
        <Header app={false}/>
        <Form>
            <FormInput name="lastName" placeholder="Last name" value={registerCredentials.lastName}
                       onChange={handleChange}/>
            <FormInput name="firstName" placeholder="First name" onChange={handleChange}
                       value={registerCredentials.firstName}/>
            <FormInput name="email" placeholder="Email" onChange={handleChange} value={registerCredentials.email}/>
            <FormInput name="password" placeholder="Password" onChange={handleChange}
                       value={registerCredentials.password} type="password"/>
            <FormButton onClick={event => {
                event.preventDefault();
                registerUser()
            }}>Register</FormButton>
            {loading ? <ErrorP>Loading</ErrorP> : null}
            {errorMsg ? <ErrorP>Error:{errorMsg}</ErrorP> : null}
        </Form>
        <FooterComponent/>
    </div>
}