import React, {useState, useEffect} from "react"
import Header from "./Header";
import {Form, FormButton, FormInput} from "../styles/styles";
import FooterComponent from "./Footer";
import {useMutation, useQuery} from "@apollo/client";
import {UPDATE_USER} from "../graphql/mutation";
import {ErrorP} from "../styles/styles";
import {GET_USER_PROFILE} from "../graphql/query";
import {useHistory} from "react-router-dom"

export default function Profile() {
    const history = useHistory()
    if(localStorage.getItem("token")===null)
        history.push("/login")

    const [{lastName, firstName, email, password}, setProfileCredentials] = useState({
        lastName: "",
        firstName: "",
        email: "",
        password: ""
    })
    const [errorMsg, setError] = useState("")
    const [updateCredentials, {loadingUpdate}] = useMutation(UPDATE_USER)
    const {loadingCredentials, error, data} = useQuery(GET_USER_PROFILE, {variables: {token: localStorage.getItem("token")}})

    useEffect(() => {
        if (data && data.getUsersProfile) {
            const {getUsersProfile: {last_name, first_name, email, password}} = data
            setProfileCredentials({
                lastName: last_name,
                firstName: first_name,
                email: email,
                password: password
            })
        }
    }, [data])

    useEffect(() => {
        setError(error)
    }, [error])

    const updateUser = () => {
        updateCredentials({
            variables: {
                last_name: lastName,
                first_name: firstName,
                email: email,
                password: password,
                token: localStorage.getItem("token")
            }
        })
            .then(res => {
                localStorage.setItem("token", res.data.updateUser.token)
            })
            .catch(error => setError(error.message))
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setProfileCredentials(prevState => ({...prevState, [name]: value}))
    }

    return <div>
        <Header/>
        <Form>
            <FormInput name="lastName" placeholder="Last name" value={lastName} onChange={handleChange}/>
            <FormInput name="firstName" placeholder="First name" onChange={handleChange} value={firstName}/>
            <FormInput name="email" placeholder="Email" onChange={handleChange} value={email}/>
            <FormInput name="password" placeholder="Password" onChange={handleChange} value={password} type="password"/>
            <FormButton name="change" onClick={event => {
                event.preventDefault();
                updateUser()
            }}>Save changes</FormButton>
            {loadingCredentials || loadingUpdate ? <ErrorP>Loading</ErrorP> : null}
            {errorMsg ? <ErrorP>Error:{errorMsg}</ErrorP> : null}
        </Form>
        <FooterComponent/>
    </div>
}