import styled from "styled-components"

const Form = styled.form`
    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
`

const ErrorP = styled.p`
    background: #f5ba13
`

const FormInput = styled.input`
     width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const FormButton = styled.button`
    position: absolute;
    right: 18px;
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
`

const StyledHeader = styled.header`
    background-color: #f5ba13;
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    .h1{
     color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;}
    `;

const Footer = styled.footer`
     position: absolute;
    text-align: center;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
`

const FooterP = styled.p`
        color: #ccc;
`

const Note = styled.div`
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;
`
const NoteH1 = styled.h1`
    font-size: 1.1em;
    margin-bottom: 6px;
`

const NoteP = styled.p`
    font-size: 1.1em;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
`

const NoteButton = styled.button`
    position: relative;
    float: right;
    margin-right: 10px;
    color: #f5ba13;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
`

export {FormInput,FormButton,Form,ErrorP,StyledHeader,Footer,FooterP,Note,NoteButton,NoteH1,NoteP}