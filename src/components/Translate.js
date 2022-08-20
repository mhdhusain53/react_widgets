import React,{ useState,useEffect }  from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";


const options = [
    {
        label: "English",
        value: "en"
    },
    {
        label: "Arabic",
        value: "ar"
    },{
        label: "Hindi",
        value: "hi"
    },{
        label:"Marathi",
        value: "mr"
    },{
        label: "Chinese",
        value: "zh"
    },{
        label: "Gujrati",
        value: "gu"
    },{
        label: "German",
        value: "de"
    },{
        label: "Korean",
        value: "ko"
    }
]

export default ()=>{
    const [selected, setSelected]=useState(options[0]);
    const [text, setText] = useState("");


    return (
        <div>
            <div className="ui form" >
                <label>Enter text</label>
                <input value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <DropDown
                label="Select a Language"
                selected={selected}
                setSelected = {setSelected}
                option = {options}
            />   
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} selected = {selected} /> 
        </div>
    )
}
