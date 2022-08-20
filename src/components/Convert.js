import React , {useState,useEffect} from "react";
import axios from "axios";

export default ({text, selected}) => {


    const [final, setFinal] = useState("");

    useEffect(()=>{

        const translate = async ()=>{
            const response = await axios.get("https://translation.googleapis.com/language/translate/v2",{
                params:{
                    q: text,
                    target: selected.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });

            console.log(response.data.data.translations[0].translatedText);
            setFinal(response.data.data.translations[0].translatedText)
        }

        var timeOutId=setTimeout(()=>{
            translate();
        }, 300);
        
        return ()=>{
            clearTimeout(timeOutId)
        }
    },[text, selected.value]);


    
        
        
    

    return (
        <div>
            {final}
        </div>
    )
}