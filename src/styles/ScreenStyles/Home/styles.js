import styled from "styled-components";
import {SearchComponent} from "./SearchAreaStyle/styles";
import {NoteArea} from "./NoteAreaStyles/styles";
import {CreateForm} from "./CreateAreaStyle/styles";

const HomeError = styled.p`
    justify-self:center;
    font-size: 1.2em;
    font-family: inherit;
    background: #f5ba13;
    margin-top: 20px;  
`

const AddButton = styled.button`
    margin: 16px auto 0px auto;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 20%;
    width: 10%;
    height: 3rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
      &: hover{
    background-color: #f6ab49;
    }
    font-size: 1em;
    font-family: inherit;  
`

const HomeArea = styled.div`
    display:grid;
    grid-template-rows: max-content max-content max-content;
    justify-content:center;
    ${SearchComponent}{
    grid-row: 1/1;
    }
    ${CreateForm}{
    grid-row: 2/2;
    }
    ${AddButton}{
    grid-row: 2/2;
    }
    ${NoteArea}{
    grid-row: 3/3;
    }
  `

export {HomeArea,AddButton,HomeError}
