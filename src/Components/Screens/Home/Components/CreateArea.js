import React, {useState} from "react"
import {CreateAreaBackButton, ErrorP, Form, FormButton, FormInput, FormTextArea} from "../styles/styles";
import {useMutation} from "@apollo/client";
import {ADD_ITEM} from "../graphql/mutation";

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
            <Form>
                <FormInput name="title" placeholder="title" value={noteInfo.title} onChange={handleChange}/>
                <FormTextArea name="description" placeholder="description" value={noteInfo.description}
                              onChange={handleChange} rows="3"/>
                <FormButton onClick={event => {
                    event.preventDefault();
                    onAdd();
                    setCredentials({title: "", description: ""})
                }}>Add</FormButton>
                <CreateAreaBackButton onClick={event => {
                    event.preventDefault();
                    props.hide();
                }}>Cancel</CreateAreaBackButton>
                {loading ? <ErrorP>Loading</ErrorP> : null}
                {error ? <ErrorP>Error:{error}</ErrorP> : null}
            </Form>
        </div>
    );
}

export default CreateArea;