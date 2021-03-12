import styled from "styled-components";

const SearchComponent = styled.div`
    display:flex;
    justify-self: center;
`

const SearchFormButton = styled.button`
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

const SearchFormInput = styled.input`
    width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
    `

const SearchError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const SearchForm = styled.form`
    justify-content: center;
    position: relative;
    width: 480px;
    margin: 32px;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
   `

export {SearchComponent,SearchFormButton,SearchFormInput,SearchError,SearchForm}