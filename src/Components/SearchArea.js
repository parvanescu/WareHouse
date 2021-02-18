import {ErrorP, Form, FormButton, FormInput, SearchDiv, ItemDiv, UserDiv} from "../styles/styles";
import React, {useState} from "react";
import {SEARCH_ITEM} from "../graphql/mutation";
import {useMutation} from "@apollo/client";
import NoteComponent from "./Note";

export default function SearchArea() {
    const [itemSearchCriteria, setItemCriteria] = useState("")
    const [userSearchCriteria, setUserCriteria] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [itemsList, setItemsList] = useState([])
    const [searchItem, {loading}] = useMutation(SEARCH_ITEM)


    const onItemSearch = () => {
        searchItem({variables: {criteria: itemSearchCriteria, token: localStorage.getItem("token")}})
            .then(res => {
                setItemsList(res.data.searchItem);
                localStorage.setItem("token", res.data.searchItem[0].token)
            })
            .catch(error => setErrorMsg(error))
    }

    const onUserSearch = () => {

    }


    const handleItemChange = (event) => {
        const {value} = event.target
        setItemCriteria(value)
    }

    const handleUserChange = (event) => {
        const data = event.target
        setUserCriteria(data)
    }

    return (
        <SearchDiv>
            <ItemDiv>
                <Form>
                    <FormInput name="itemCriteria" placeholder="Search item" value={itemSearchCriteria}
                               onChange={handleItemChange}/>
                    <FormButton onClick={event => {
                        event.preventDefault();
                        onItemSearch()
                    }}>Search</FormButton>
                    {itemsList ? itemsList.map((note, index) => <NoteComponent title={note.title}
                                                                               content={note.description}
                                                                               key={index} id={note.id}/>) : null}
                    {loading ? <ErrorP>Loading</ErrorP> : null}
                    {errorMsg ? <ErrorP>Error:{errorMsg}</ErrorP> : null}
                </Form>
            </ItemDiv>
            <UserDiv>
                <Form>
                    <FormInput name="userCriteria" placeholder="Search user" value={userSearchCriteria}
                               onChange={handleUserChange}/>
                    <FormButton onClick={event => {
                        event.preventDefault();
                        onUserSearch()
                    }}>Search</FormButton>
                    {/*{loading ? <ErrorP>Loading</ErrorP>:null}*/}
                    {/*{error? <ErrorP>Error:{error}</ErrorP>:null}*/}
                </Form>
            </UserDiv>
        </SearchDiv>
    );
}