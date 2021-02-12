import React from "react"
import Header from "./Header"
import CreateArea from "./CreateArea";
import FooterComponent from "./Footer";
import Note from "./Note";

function App(){
    function addItem(newItem){

    }

    function deleteItem(id){

    }


    return <div>
        <Header/>
        <CreateArea addItem={addItem}/>
        {noteArray.map((note,index) => <Note title={note.title} content={note.content} key={index} id={index} onDelete={deleteItem}/>) }
        <FooterComponent />
        </div>
}

export default App