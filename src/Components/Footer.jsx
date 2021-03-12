import React from "react";
import {Footer,FooterP} from "../styles/ComponentStyles/Footer/styles";

function FooterComponent() {
    const currentDate = new Date();

    return <Footer>
        <FooterP>Copyright © {currentDate.getFullYear()}</FooterP>
    </Footer>
}

export default FooterComponent;