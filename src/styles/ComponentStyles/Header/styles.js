import styled from "styled-components";


const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #f5ba13;
    padding: 0px 0 0px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    h1{
    grid-column: 1/1;
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 200;
    padding-top: 16px;
    }
    div{
    grid-column: 2/2;
    }
    `;
//padding : top right bottom left

const HeaderButton = styled.button`
    background-color: #f5ba13;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    width: 100%;
     &: hover{
    background-color: #f6ab49;
    }  
`

const DropButton = styled.button`
     background-color: #f5ba13;
     color: #fff;
     padding: 8px 32px;
     border: none;
`

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f5ba13;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    z-index: 1;
    width: 100%;
    ${HeaderButton}{
    color: black;
    display: block;
    }
`
// ${HeaderButton}: hover &{
//     color: #f6ab49;
// }

const DropDown = styled.div`
    position: relative;
    justify-self: flex-end;
    &: hover ${DropDownContent} {display: block;}
    &: hover ${DropButton} {
    background-color: #f6ab49;
    }
`

const HeaderTitle = styled.h1`
    cursor:pointer;
    display:flex;
    padding-bottom:10px;
`

export {
    StyledHeader,
    HeaderButton,
    DropButton,
    DropDown,
    DropDownContent,
    HeaderTitle
}