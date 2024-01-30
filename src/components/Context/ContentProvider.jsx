import { createContext, useState } from "react";

export const data = createContext(null);

export const ContentProvider = (props) => {

    let [popUp, setPopUp] = useState(false);
    let [userArray, setUserArray] = useState([]);
    let [user,setUser] = useState({name : "Shashank", date : "24-10-2024", image : ""}); 
    let[userMsg, setUserMsg] = useState([]); 
    let[msg,setMsg] = useState([]);
    let[searchUser, setSearchUser] = useState();
    let [image, setImage] = useState(null);
    let [id,setId] = useState(null);
    let [profileHead, setProfileHead] = useState({});
    let [chatId, setChatId] = useState(0);
    let [profileId, setProfileId] = useState();
    let [lastMsg, setLastMsg] = useState([]);
    let [time, setTime] = useState([]);

    return(
        <data.Provider value = {{popUp,setPopUp,userArray,setUserArray,user,
        setUser,userMsg,setUserMsg,id,setId,msg,setMsg,searchUser,setSearchUser
        ,image,setImage,profileHead,setProfileHead,chatId,setChatId,profileId,
        setProfileId,lastMsg,setLastMsg,time,setTime}}>
                {props.children}
        </data.Provider>
    );
}



