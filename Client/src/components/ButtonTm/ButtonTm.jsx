/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { FcFlashOn,FcFlashOff} from 'react-icons/fc';


const ButtonTm = () => {
    const [theme, setTheme] = useState("dark");
    const [dark,setDark] = useState (true)
  
    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
    }, [theme]);   
    
    const chageTheme = () => {
        let msg;      
       setTheme((preValue) => {
               if (preValue === 'dark') msg = "light";
               else msg = 'dark'
                 
               setDark(!dark)
               return msg
             });
           };

    return (
      <button className="buttonChange" onClick={chageTheme}>
       {!dark? < FcFlashOff className="myIcon" />:< FcFlashOn className="myIcon" /> }
      </button>
    );
  };

export default ButtonTm