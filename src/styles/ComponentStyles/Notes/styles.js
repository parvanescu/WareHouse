import styled from "styled-components";

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
    padding-top: 20px;
`

const NoteP = styled.p`
    padding-top: 20px;
    padding-bottom: 10px;
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
    background-color:#fff;
    border: none;
    width: 36px;
    height: 36px;
    cursor: pointer;
    outline: none;
     &: hover{
    color: #f6ab49;
    }  
`

const NoteError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`
export {Note,NoteP,NoteH1,NoteButton,NoteError}