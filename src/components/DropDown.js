import React,{ useState, useEffect , useRef}  from "react";

const DropDown =(props)=>{

    const [open,setOpen] =useState(false);
    const ref = useRef();

    

    useEffect(()=>{
        console.log("start");
        const onBodyClick = (event)=>{
            if(ref.current.contains(event.target)){
                return;
            }

            setOpen(false);
        }
        document.body.addEventListener("click",onBodyClick ,{capture:true})
        return ()=>{
            console.log("stop");
            document.body.removeEventListener("click",onBodyClick ,{capture:true})
    }
    },[]);

    const render = props.option.map((item,index)=>{
        if(item!=props.selected){
        return (
            <div 
            className="item" 
            key={index}
            onClick={(e)=>props.setSelected(item)}
            >
                {item.label}
            </div>
        ) }
    })
    return(
        
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div 
                onClick={()=>setOpen(!open)}
                className={`ui selection dropdown ${open? "active visible":""}`}
                >
                    <i className="icon dropdown" ></i>
                    <div className="text">
                        {props.selected.label}
                    </div>
                    <div className={`menu ${open?'visible transition':""}`}>
                        {render}
                    </div>
                </div>
                
            </div>
             
        </div>
    )
}

export default DropDown;