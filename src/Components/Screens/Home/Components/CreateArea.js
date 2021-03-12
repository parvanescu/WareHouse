import React, {useState} from "react"
import {CreateForm,CreateFormInput,CreateFormTextArea,CreateFormButton,CreateAreaBackButton,CreateError} from "../../../../styles/ScreenStyles/Home/CreateAreaStyle/styles";
import {useMutation} from "@apollo/client";
import {ADD_ITEM} from "../../../../graphql/mutation";

function CreateArea(props) {

    const [noteInfo, setCredentials] = useState({title: "", description: ""});
    const [error, setError] = useState("");
    const [addItem, {loading}] = useMutation(ADD_ITEM)

    const onAdd = () => {
        addItem({
            variables: {title: noteInfo.title, description: noteInfo.description, token: localStorage.getItem("token")}
        }).then(res => {
            const {addItem: {id, title, description, token}} = res.data
            localStorage.setItem("token", token)
            props.updateUi({id: id, title: title, description: description})
        }).catch(error => setError(error.message))
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setCredentials(prevState => ({...prevState, [name]: value})
        )
    }


    return (
        <div>
            <CreateForm>
                <CreateFormInput name="title" placeholder="title" value={noteInfo.title} onChange={handleChange}/>
                <CreateFormTextArea name="description" placeholder="description" value={noteInfo.description}
                              onChange={handleChange} rows="3"/>
                <CreateFormButton onClick={event => {
                    event.preventDefault();
                    onAdd();
                    setCredentials({title: "", description: ""})
                }}>Add</CreateFormButton>
                <CreateAreaBackButton onClick={event => {
                    event.preventDefault();
                    props.hide();
                }}>Cancel</CreateAreaBackButton>
                {loading ? <CreateError>Loading</CreateError> : null}
                {error ? <CreateError>Error:{error}</CreateError> : null}
            </CreateForm>
        </div>
    );
}

export default CreateArea;