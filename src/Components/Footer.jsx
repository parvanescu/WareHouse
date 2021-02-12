import React from "react";
import {FooterP,Footer} from "../styles/styles";

function FooterComponent(){
    const currentDate = new Date();

    return <Footer>
        <FooterP>Copyright © {currentDate.getFullYear()}</FooterP>
    </Footer>
}

export default FooterComponent;