import styled from "styled-components";


const CreateFormTextArea = styled.textarea`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
`

const CreateFormButton = styled.button`
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 60px;
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

const CreateFormInput = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const CreateError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const CreateForm = styled.form`
    justify-content: center;
    position: relative;
    width: 480px;
    margin: 32px;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
   `

const CreateAreaBackButton = styled.button`
    position: absolute;
    right: 412px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
    font-family: inherit;
     &: hover{
    background-color: #f6ab49;
    }  
`

export {CreateAreaBackButton,CreateForm,CreateFormInput,CreateFormButton,CreateFormTextArea,CreateError}