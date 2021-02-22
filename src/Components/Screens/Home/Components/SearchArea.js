import {ErrorP, Form, FormButton, FormInput, SearchComponent} from "../styles/styles";
import React, {useState} from "react";
import {SEARCH_ITEM} from "../graphql/mutation";
import {useMutation} from "@apollo/client";
import NoteComponent from "./Note";

export default function SearchArea(props) {
    const [itemSearchCriteria, setItemCriteria] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [itemsList, setItemsList] = useState([])
    const [searchItem, {loading}] = useMutation(SEARCH_ITEM)


    const onItemSearch = () => {
        searchItem({variables: {criteria: itemSearchCriteria, token: localStorage.getItem("token")}})
            .then(res => {
                res.data.searchItem.forEach(item =>updateItemsList({id:item.id,title:item.title,description:item.description}))
                console.log(res.data.searchItem)
                console.log(itemsList)
                localStorage.setItem("token", res.data.searchItem[0].token)
            })
            .catch(error => setErrorMsg(error))
    }

    const updateItemsList = (item) =>{
        setItemsList(prevState => [...prevState,item])
    }

    const handleItemChange = (event) => {
        const {value} = event.target
        setItemCriteria(value)
    }

    return (
        <SearchComponent>
            <Form>
                <FormInput name="itemCriteria" placeholder="Search item" value={itemSearchCriteria}
                           onChange={handleItemChange}/>
                <FormButton onClick={event => {
                    event.preventDefault();
                    onItemSearch();

                    props.updateUi(itemsList);
                }}>Search</FormButton>
                {/*{itemsList ? itemsList.map((note, index) => <NoteComponent title={note.title}*/}
                {/*                                                           content={note.description}*/}
                {/*                                                           key={index} id={note.id}/>) : null}*/}
                {loading ? <ErrorP>Loading</ErrorP> : null}
                {errorMsg ? <ErrorP>Error:{errorMsg}</ErrorP> : null}
            </Form>
        </SearchComponent>
    );
}