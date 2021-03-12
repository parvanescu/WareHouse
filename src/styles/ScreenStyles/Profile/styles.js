import styled from "styled-components";

const ProfileFormButton = styled.button`
    position: relative;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 20%;
    width: 150px;
    height: 60px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
    font-size: 1em;
    font-family: inherit;
     &: hover{
    background-color: #f6ab49;
    }  
    margin-top: 15px;
`

const ProfileFormInput = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const ProfileError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const ProfileForm = styled.form`
    justify-self: center;
    position: relative;
    width: 480px;
    margin: 32px;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
   `
const ProfileGrid = styled.div`
    display:grid;
    grid-template-rows: 1fr;
`


export {ProfileError,ProfileForm,ProfileFormButton,ProfileFormInput,ProfileGrid}