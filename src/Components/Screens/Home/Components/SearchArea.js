import {SearchComponent,SearchForm,SearchFormInput,SearchFormButton,SearchError} from "../../../../styles/ScreenStyles/Home/SearchAreaStyle/styles";
import React, {useState} from "react";
import {SEARCH_ITEM} from "../../../../graphql/mutation";
import {useMutation} from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SearchArea(props) {
    const [itemSearchCriteria, setItemCriteria] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [searchItem, {loading}] = useMutation(SEARCH_ITEM)


    const onItemSearch = () => {
        searchItem({variables: {criteria: itemSearchCriteria, token: localStorage.getItem("token")}})
            .then(res => {
                props.updateUi(res.data.searchItem);
                localStorage.setItem("token", res.data.searchItem[0].token)
            })
            .catch(error => setErrorMsg(error.message))
    }

    const handleItemChange = (event) => {
        const {value} = event.target
        setItemCriteria(value)
    }

    return (
        <SearchComponent>
            <SearchForm>
                <SearchFormInput name="itemCriteria" placeholder="Search item" value={itemSearchCriteria}
                           onChange={handleItemChange}/>
                <SearchFormButton onClick={event => {
                    event.preventDefault();
                    onItemSearch();
                }}>Search</SearchFormButton>
                {loading ? <CircularProgress/>: null}
                {errorMsg ? <SearchError>Error:{errorMsg}</SearchError> : null}
            </SearchForm>
        </SearchComponent>
    );
}