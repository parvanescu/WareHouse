import React from "react"
import Header from "./Header";
import Note, {ErrorP} from "../styles/styles";
import FooterComponent from "./Footer";
import SearchArea from "./SearchArea";
import {useHistory} from "react-router-dom";

export default function Search() {
    const history = useHistory()
    if(localStorage.getItem("token")===null)
        history.push("/login")

    return <div>
        <Header/>
        <SearchArea/>
        <FooterComponent/>
    </div>
}