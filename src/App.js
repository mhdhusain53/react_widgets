import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Header from "./components/Header";


const items = [
    {title: "What is React ?",
    content: "React is a front end javascript framework."
    },{
        title: "Why to use React ?",
        content: "React is a favorite JS library amongs Engineers."
    },{
        title: "How do you use React ?",
        content: "We use React by creating components."
    }
]

const option = [
    {
        label:"The Color Red",
        value: "red"
    },{
        label:"The Color Blue",
        value: "blue"
    },{
        label:"The Color Green",
        value: "green"
    }
]




export default ()=> {
    const [selected, setSelected] = useState(option[0]);
    
    const give =()=>{

    

        if(window.location.pathname==="/"){
            return <Accordion items={items} />
        }else if(window.location.pathname==="/search"){
            return <Search />
        }else if(window.location.pathname==="/dropdown"){
            return <div>
            <DropDown 
            selected={selected}
            setSelected= {setSelected}
            option={option} 
            label="Select a Color"
        />
        <h3 style={{color:selected.value}}>The text is of {selected.value} color.</h3>
        </div>
        
        }else if (window.location.pathname==="/translate"){
            return <Translate />
        }
    }





    return (
    <div style={{padding: "25px"}}>
        <Header />
        {give()}
        
    </div>
    );
}