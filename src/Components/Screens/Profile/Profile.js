import React, {useState, useEffect} from "react"
import Header from "../../Header";
import FooterComponent from "../../Footer";
import {useMutation, useQuery} from "@apollo/client";
import {UPDATE_USER} from "../../../graphql/mutation";
import {GET_USER_PROFILE} from "../../../graphql/query";
import {useHistory} from "react-router-dom"
import {
    ProfileFormInput,
    ProfileFormButton,
    ProfileForm,
    ProfileError,
    ProfileGrid
} from "../../../styles/ScreenStyles/Profile/styles";
import {CircularProgress} from "@material-ui/core";

export default function Profile() {
    const history = useHistory()
    if (localStorage.getItem("token") === null)
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
        <ProfileGrid>
            <ProfileForm>
                <ProfileFormInput name="lastName" placeholder="Last name" value={lastName} onChange={handleChange}/>
                <ProfileFormInput name="firstName" placeholder="First name" onChange={handleChange} value={firstName}/>
                <ProfileFormInput name="email" placeholder="Email" onChange={handleChange} value={email}/>
                <ProfileFormInput name="password" placeholder="Password" onChange={handleChange} value={password}
                                  type="password"/>
                <ProfileFormButton name="change" onClick={event => {
                    event.preventDefault();
                    updateUser()
                }}>Save changes</ProfileFormButton>
                {loadingCredentials || loadingUpdate ? <CircularProgress/> : null}
                {errorMsg ? <ProfileError>Error:{errorMsg}</ProfileError> : null}
            </ProfileForm>
        </ProfileGrid>
        <FooterComponent/>
    </div>
}