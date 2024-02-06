import Styles from "./profile.module.css";
import PopUpForm from "../PopUp/PopUpForm";
import { data } from "../Context/ContentProvider";
import { useContext, useEffect, useState } from "react";

const background = () => {
 let { profileId,popUp,userMsg } = useContext(data);
 const [messages, setMessages] = useState([]);

 useEffect(() => {
    const fetchAndDisplayMessages = async () => {
      if (profileId !== null) {
        const usermsg = JSON.parse(localStorage.getItem('usermsg'));
        if (usermsg !== null && usermsg[profileId] !== null) {
          setMessages(usermsg[profileId]);
        }
      }
    };
    fetchAndDisplayMessages();
 }, [profileId,userMsg]);


 return (
    <div className={`${Styles.backgroundContainer} relative flex flex-col justify-end`}>
      <div className="flex justify-center">
        <div className = "bg-white w-fit p-1">Today's Date</div>
      </div>
      
      {messages != null ? messages.map((val, index) => (
        <div className="flex justify-end" key={index}>
          <div>
            <div className={`${Styles.fadeInMain} bg-green-400 w-fit p-1 m-2`}>
              {val[0]}
            <span className = "px-2" style = {{fontSize : "10px"}}>{val[1]}</span>
            </div>        
          </div>
        </div>
      )) : ""}
      <PopUpForm className={popUp ? "pop-up-form" : ""} />
    </div>
 );
};

export default background;
