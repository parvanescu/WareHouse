import React, {useState, useEffect} from "react"
import Header from "./Header"
import CreateArea from "./CreateArea";
import FooterComponent from "./Footer";
import NoteComponent from "./Note";
import {GET_ALL_USERS_ITEMS} from "../graphql/query";
import {useQuery} from "@apollo/client";
import {AddButton, ErrorP, Footer} from "../styles/styles";
import {useHistory} from "react-router-dom"
import {HomeArea, NoteArea} from "../styles/styles";
import SearchArea from "./SearchArea";

function App() {
    const [noteArray, setNoteArray] = useState([])
    const [showAddForm, setShowAddFrom] = useState(false)
    const [showAllItems, setShowAllItems] = useState(true)
    const {loading, error, data} = useQuery(GET_ALL_USERS_ITEMS,
        {variables: {token: localStorage.getItem("token")}})

    useEffect(() => {
        if (data && showAllItems) {
            localStorage.setItem("token", data.getAllUsersItems[0].token)
            if (data.getAllUsersItems[0].title !== "")
                setNoteArray(data.getAllUsersItems)
        }
    }, [data, showAllItems])

    const updateUi = (items) => {
        console.log(items)
        setNoteArray(prevState => ([...prevState, items]))
    }

    const history = useHistory()
    if (localStorage.getItem("token") === null)
        history.push("/login")

    return <div>
        <Header/>
        <HomeArea>
            <SearchArea updateUi={items => {
                setNoteArray([]);
                updateUi(items);
                setShowAllItems(false)
            }}/>
            {showAddForm ? <CreateArea updateUi={items => {
                    updateUi(items);
                    setShowAllItems(true)
                }} hide={() => setShowAddFrom(false)}/> :
                <AddButton onClick={() => setShowAddFrom(true)}>Add item</AddButton>}
        </HomeArea>
        <NoteArea>
            {noteArray.map((note, index) => <NoteComponent title={note.title} content={note.description}
                                                           key={index} id={note.id}/>)}
        </NoteArea>
        {loading ? <ErrorP>Loading...</ErrorP> : null}
        {error ? <ErrorP>Error:{error.message}</ErrorP> : null}
        <FooterComponent/>
    </div>
}

export default App