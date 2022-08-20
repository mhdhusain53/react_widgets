import React, { useState, useEffect } from "react";
import axios from "axios";


const Search =()=>{

    const [term,setTerm] = useState("programming");
    const [result, setResult] = useState([]);


    useEffect(()=>{
        const search=async ()=>{
           const response = await axios.get("https://en.wikipedia.org/w/api.php",{
               params: {
                   action: "query",
                   list: "search",
                   origin: "*",
                   format: "json",
                   srsearch: term
               }
           });
           setResult(response.data.query.search);
           console.log(result);
        };
        
        var timeOutId=setTimeout(()=>{
            if(term){
                search();
            }
        }, 300);
        
        return ()=>{
            clearTimeout(timeOutId)
        }
        
        


    },[term])

    const termChange=(event)=>{
        setTerm(event.target.value);
    }

    const render = result.map((res)=>{
        return (
            <div className="item" key={res.pageid}>
                <div className="right floated content">
                    <a 
                    href={`https://en.wikipedia.org/?curid=${res.pageid}`}
                    className="ui button">
                    Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {res.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{ __html: res.snippet}}></span>
                        
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter search term
                    </label>
                    <input 
                    type="text" 
                    className="input"
                    onChange={termChange}
                     />
                </div>
            </div>
            <div className="ui celled list">
                {render}
            </div>
        </div>
    )
}

export default Search;