import Header from "../../Header";
import {
    SetPasswordButtonsGrid, SetPasswordError,
    SetPasswordForm, SetPasswordFormButton,
    SetPasswordFormInput,
    SetPasswordGrid
} from "../../../styles/ScreenStyles/SetPassword/styles";
import FooterComponent from "../../Footer";
import React, {useState} from "react";
import {useParams} from "react-router"
import {useMutation} from "@apollo/client";
import {SET_PASSWORD} from "../../../graphql/mutation";
import {useHistory} from "react-router"

export default function SetPassword() {
    let history = useHistory()
    let {userId, organisationId} = useParams()
    const [passwords, setRegisterCredentials] = useState({
        password: "",
        confirmPassword: ""
    })
    const [errorMsg, setError] = useState("")
    const [setPassword, {data, loading}] = useMutation(SET_PASSWORD)
    const handleChange = (event) => {
        const {name, value} = event.target
        setRegisterCredentials(prevState => ({...prevState, [name]: value})
        )
    }

    const setUsersPassword = () => {
        setPassword({
            variables: {
                user_id: userId,
                organisation_id: organisationId,
                password: passwords.password
            }
        }).then(history.push("/login")).catch(err => setError(err))
    }

    const checkPasswords = () => {
        return passwords.password === passwords.confirmPassword
    }

    return <div>
        <Header/>
        <SetPasswordGrid>
            <SetPasswordForm>
                <SetPasswordFormInput name="password" placeholder="Password" value={passwords.password}
                                      onChange={handleChange}/>
                <SetPasswordFormInput name="confirmPassword" placeholder="Confirm password" onChange={handleChange}
                                      value={passwords.confirmPassword}/>
                <SetPasswordButtonsGrid>
                    <SetPasswordFormButton onClick={event => {
                        event.preventDefault();
                        history.push("/register")
                    }}>
                        Back
                    </SetPasswordFormButton>
                    <SetPasswordFormButton onClick={event => {
                        event.preventDefault();
                        checkPasswords() ? setUsersPassword() : setError("Passwords do not match");
                    }}>Set password</SetPasswordFormButton>

                </SetPasswordButtonsGrid>
                {loading ? <SetPasswordError>Loading</SetPasswordError> : null}
                {errorMsg ? <SetPasswordError>Error:{errorMsg}</SetPasswordError> : null}
            </SetPasswordForm>
        </SetPasswordGrid>
        <FooterComponent/>
    </div>


}