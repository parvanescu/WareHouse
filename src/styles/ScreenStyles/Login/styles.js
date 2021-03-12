import styled from "styled-components";

const LoginFormButton = styled.button`
    justify-self: center;
    position: relative;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 40%;
    width: 80px;
    height: 60px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
    font-size: 1em;
    font-family: inherit;
     &: hover{
    background-color: #f6ab49;
    }  
`

const LoginFormInput = styled.input`
    margin-right: 4px;
    width: 100%;
    border: none;
    margin: 15px 0px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const LoginError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const LoginForm = styled.form`
    justify-self: center;
    position: relative;
    width: 480px;
    margin: 32px;
    background: #fff;
    margin-top:100px;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
   `

const LoginGrid = styled.div`
    display:grid;
    grid-template-rows: 1fr;
`

const LoginButtonsGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`

export{LoginButtonsGrid,LoginGrid,LoginError,LoginForm,LoginFormButton,LoginFormInput}