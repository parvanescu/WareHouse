import React, {useEffect, useState} from "react";
import {DropButton, DropDown, DropDownContent, HeaderButton, StyledHeader,HeaderTitle} from "../styles/ComponentStyles/Header/styles";
import {useHistory} from "react-router-dom"
import {useQuery} from "@apollo/client";
import {GET_USER_PROFILE} from "../graphql/query";

function Header() {
    const history = useHistory()
    const [name,setUserName] = useState("");
    const {loadingCredentials, error, data} = useQuery(GET_USER_PROFILE, {variables: {token: localStorage.getItem("token")}})

    useEffect(() => {
        if (data && data.getUsersProfile) {
            const {getUsersProfile: {last_name}} = data
            setUserName(last_name)
        }
    }, [data])
    
    
    

    return <StyledHeader>
        <HeaderTitle onClick={()=>history.push("/home")}>Warehouse</HeaderTitle>
        {localStorage.getItem("token")==="undefined" || localStorage.getItem("token")==null ? null:
            <DropDown>
                <DropButton><h1>
                    {error || loadingCredentials?null:name}
                    <i className="fas fa-chevron-circle-down"/></h1></DropButton>
                <DropDownContent>
                    <HeaderButton onClick={() => history.push("/organization")}><h2>Organisation</h2></HeaderButton>
                    <HeaderButton onClick={() => history.push("/profile")}><h2>My profile</h2></HeaderButton>
                    <HeaderButton onClick={() => history.push("/profile")}><h2>Users</h2></HeaderButton>
                    <HeaderButton onClick={() => {
                        history.push("/login");
                        localStorage.clear()
                    }}><h2>Sign out</h2></HeaderButton>
                </DropDownContent>
            </DropDown>}
    </StyledHeader>
}

export default Header;