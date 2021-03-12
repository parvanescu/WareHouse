import React, {useState} from "react";
import {NoteH1,Note,NoteButton,NoteP,NoteError} from "../../../../styles/ComponentStyles/Notes/styles";
import {useMutation} from "@apollo/client";
import {DELETE_ITEM} from "../../../../graphql/mutation";
import DeleteIcon from "@material-ui/icons/Delete";


function NoteComponent(props) {

    const [error, setError] = useState("");
    const [deleteItem, {loading, data}] = useMutation(DELETE_ITEM)


    const onDelete = (id) => {
        deleteItem({
            variables: {id: id, token: localStorage.getItem("token")}
        }).then(res => localStorage.setItem("token", res.data.deleteItem)).catch(error => setError(error.message))
    }


    return <Note>
        <NoteH1>{props.title}</NoteH1>
        <NoteP>{props.content}</NoteP>
        {loading ? <NoteError>Loading</NoteError> : null}
        {error ? <NoteError>Error:{error}</NoteError> : null}
        <NoteButton onClick={() => onDelete(props.id)}><DeleteIcon/></NoteButton>
    </Note>
}


export default NoteComponent;