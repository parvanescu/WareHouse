import styled from "styled-components";

const SetPasswordFormButton = styled.button`
    justify-self: center;
    position: relative;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 20%;
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

const SetPasswordFormInput = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const SetPasswordError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const SetPasswordForm = styled.form`
    justify-self: center;
    position: relative;
    width: 480px;
    margin: 32px;
    background: #fff;
    padding: 20px;
    margin-top: 50px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
   `

const SetPasswordGrid = styled.div`
    display:grid;
    grid-template-rows: 1fr;
`

const SetPasswordButtonsGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`

export {SetPasswordButtonsGrid,SetPasswordError,SetPasswordForm,SetPasswordFormButton,SetPasswordFormInput,SetPasswordGrid}