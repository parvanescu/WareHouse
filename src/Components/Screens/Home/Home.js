import React, {useState, useEffect} from "react"
import Header from "../../Header"
import CreateArea from "./Components/CreateArea";
import FooterComponent from "../../Footer";
import NoteComponent from "./Components/Note";
import {GET_ALL_USERS_ITEMS} from "../../../graphql/query";
import {useQuery} from "@apollo/client";
import {useHistory} from "react-router-dom"
import {AddButton} from "../../../styles/ScreenStyles/Home/styles";
import {HomeError} from "../../../styles/ScreenStyles/Home/styles";
import {HomeArea} from "../../../styles/ScreenStyles/Home/styles"
import {NoteArea} from "../../../styles/ScreenStyles/Home/NoteAreaStyles/styles";

import SearchArea from "./Components/SearchArea";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
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
        setNoteArray(prevState => ([...prevState, items]))
    }

    const searchUpdate = (items) =>{
        if (items[0].title !== "")
            setNoteArray(items)
    }

    const history = useHistory()
    if (localStorage.getItem("token") === null)
        history.push("/login")

    return <div>
        <Header/>
        <HomeArea>
            <SearchArea updateUi={items => {
                setShowAllItems(false);
                setNoteArray([]);
                searchUpdate(items);
            }}/>
            {showAddForm ? <CreateArea updateUi={items => {
                    setShowAllItems(true)
                    updateUi(items);
                }} hide={() => setShowAddFrom(false)}/> :
                <AddButton onClick={() => setShowAddFrom(true)}>Add item</AddButton>}
            <NoteArea>
                {noteArray.map((note, index) => <NoteComponent title={note.title} content={note.description}
                                                               key={index} id={note.id}/>)}
            </NoteArea>
            {loading ? <CircularProgress/> : null}
            {error ? <HomeError>Error:{error.message}</HomeError> : null}
        </HomeArea>
        <FooterComponent/>
    </div>
}

export default Home