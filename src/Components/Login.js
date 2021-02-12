import {React,useState} from "react"
import {Redirect} from "react-router-dom"
import {useMutation} from "@apollo/client";
import {LOGIN} from "../graphql/mutation";
import {ErrorP, Form, FormButton, FormInput} from "../styles/styles";
import Header from "./Header";
import FooterComponent from "./Footer";

function Login() {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const [login,{loading,data}] =  useMutation(LOGIN)


    const onLogin = () =>{
        login({
            variables: {email:credentials.email,password:credentials.password}
        }).then(res=> {localStorage.setItem("token",res.data.login)}).catch(error=>setError(error.message))
    }


    const handleChange = (event) => {
        const {name, value} = event.target
        setCredentials(prevState => ({...prevState, [name]: value})
        )
    }

    if(data){
        return <Redirect to={"/app"}/>
    }

    return (
            <div>
                <Header/>
                <Form>
                <FormInput name="email" placeholder="email" value={credentials.email} onChange={handleChange}/>
                <FormInput type="password" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
                <FormButton onClick={event => {event.preventDefault();onLogin()}}>Login</FormButton>
                {loading ? <ErrorP>Loading</ErrorP>:null}
                {error? <ErrorP>Error:{error}</ErrorP>:null}
                </Form>
                <FooterComponent/>
            </div>
    );
}

export default Login;
