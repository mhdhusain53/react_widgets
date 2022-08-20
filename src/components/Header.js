import React from "react";

export default ({element, setElement})=>{
    return <div className="ui secondary menu pointing">
        <a href="/" className="item" >
            Accordion 
        </a>
        <a href="/search" className="item"  >
           Search 
        </a>
        <a href="/dropdown" className="item"  >
            DropDown
        </a>
        <a href="/translate" className="item" >
            Translate
        </a>

    </div>
}