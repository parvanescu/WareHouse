import {React, useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import {useMutation} from "@apollo/client";
import {CHECK_TOKEN, LOGIN} from "../../../graphql/mutation";
import Header from "../../Header";
import FooterComponent from "../../Footer";
import {
    LoginForm,
    LoginFormInput,
    LoginFormButton,
    LoginError,
    LoginGrid,
    LoginButtonsGrid
} from "../../../styles/ScreenStyles/Login/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login() {
    const history = useHistory()
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const [login, {loading, data}] = useMutation(LOGIN)
    const [checkToken] = useMutation(CHECK_TOKEN)

    const onRedirectLogin = () =>{
        checkToken({variables:{token:localStorage.getItem("token")}})
            .then(res=> {localStorage.setItem("token",res.data.checkToken);history.push("/home")})
            .catch(err=>localStorage.removeItem("token"))
    }

    const onLogin = () => {
        login({
            variables: {email: credentials.email, password: credentials.password}
        }).then(res => {
            localStorage.setItem("token", res.data.login);
            history.push("/home")
        }).catch(error => setError(error.message))
    }


    const handleChange = (event) => {
        const {name, value} = event.target
        setCredentials(prevState => ({...prevState, [name]: value})
        )
    }

    return (
        <div>
            <Header app={false}/>
            <LoginGrid>
                <LoginForm>
                    <LoginFormInput name="email" placeholder="email" value={credentials.email} onChange={handleChange}/>
                    <LoginFormInput type="password" name="password" placeholder="password" value={credentials.password}
                                    onChange={handleChange}/>
                    <LoginButtonsGrid>
                        <LoginFormButton onClick={event => {
                            event.preventDefault();
                            onLogin()
                        }}>Login</LoginFormButton>
                        <LoginFormButton onClick={event=>{
                            event.preventDefault();
                            history.push("/register")
                        }}>Register</LoginFormButton>
                    </LoginButtonsGrid>
                    {loading ? <CircularProgress/> : null}
                    {error ? <LoginError>Error:{error}</LoginError> : null}
                    {localStorage.getItem("token")==="undefined" || localStorage.getItem("token")== null ? null:onRedirectLogin()}
                </LoginForm>
            </LoginGrid>
            <FooterComponent/>
        </div>
    );
}

export default Login;
