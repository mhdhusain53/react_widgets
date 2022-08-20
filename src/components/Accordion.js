import React, { useState } from "react";

const Accordion = (props) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onDivClick = (index) =>{
        setActiveIndex(index);
    }

    const item = props.items.map((item, index)=>{

        const active = index===activeIndex? "active": "";

        return ( 
        <div key={index}
        onClick={()=>onDivClick(index)}
        >
            <div className={`title ${active}`}>
            <i className="icon dropdown" />
            {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </div>);
    });



    return (
        <div className="ui accordion styled">
            {item}
        </div>
    );
}

export default Accordion;