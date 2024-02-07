import { useContext, useEffect, useRef, useState } from "react";
import { data } from "../Context/ContentProvider";
import { setUserMsgs } from "../utils/storage";
import Smiley from "../../assets/svg/smiley"
import PlusIcon from "../../assets/svg/plusIcon.jsx"
import Mic from "../../assets/svg/mic.jsx"


export default function footer(){
  let {
    setUserMsg,
    msg,
    setMsg,
    profileId,
    setLastMsg
  } = useContext(data);

  let [tMsg, setTimeMsg] = useState("");

  function handleUserMsg(e) {
    e.preventDefault();
    setUserMsgs(setUserMsg,profileId,setLastMsg,msg,tMsg);
  }

  const handleSubmit = () => {
    ref.current.value = '';
  };

  const ref = useRef(null);

  useEffect(() => {
    timeMsgs();
  },[handleUserMsg])

  function timeMsgs(){
    let date = new Date();
    date.getHours() > 12 ? 
      setTimeMsg(`${date.getHours() - 12} : ${date.getMinutes()} pm`) :
      setTimeMsg(`${date.getHours()} : ${date.getMinutes()} am`)
  }

  return (
    <footer className="flex items-center h-14 bg-slate-100">
      <div className="text-slate-600 px-3 ">
        <Smiley />
      </div>
      <div className="documents-add-popup text-slate-600 px-4">
        <span>
        <PlusIcon />
        </span>
      </div>
      <div className="grow">
        <form
          onSubmit={(e) => {
            handleUserMsg(e);
            handleSubmit();
          }}
        >
          <input
            className="w-full h-full focus:outline-none placeholder:p-0.5 p-2 rounded-sm"
            type="text"
            placeholder="Enter some text"
            ref={ref}
            onChange={(e) => {setMsg(e.target.value);}}
          ></input>
        </form>
      </div>
      <div className="flex items-center p-2">
        <Mic />
      </div>
    </footer>
  );
};

