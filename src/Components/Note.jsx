import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {Note, NoteButton, NoteH1,NoteP} from "../styles/styles";

function NoteComponent(props){
    return <Note>
        <NoteH1>{props.title}</NoteH1>
        <NoteP>{props.content}</NoteP>
        <NoteButton onClick={()=>props.onDelete(props.id)}><DeleteIcon /></NoteButton>
    </Note>
}


export default NoteComponent;