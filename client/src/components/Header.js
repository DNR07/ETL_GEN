import React from "react";
import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import "../styles.css";

function Header(){
return(
        <div className="header" >  
            <h1>ETL Generator</h1>
            <IconContext.Provider value={{ size: "38px" }}>
                <div className="profile_icon"><CgProfile /></div>
            </IconContext.Provider>
            {}
        </div>
    )
}

export default Header;