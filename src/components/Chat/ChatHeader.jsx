import { useContext } from "react";
import { data } from "../Context/ContentProvider";
import ChatHamburgerMenu from "../../assets/svg/chatHamburgerMenu";
import AddUserIcon from "../../assets/svg/AddUserIcon";
import ChannelUser from "../../assets/svg/ChannelUser";
import Status from "../../assets/svg/Status";
import GroupsIcon from "../../assets/svg/GroupsIcon";

export default function ChatHeader(prop) {
  //Object destructuring...
  let { img } = prop;
  let { popUp, setPopUp } = useContext(data);

  // console.log(popUp);

  return (
    <>
      <header className="p-1.5 flex bg-gray-100">
        <figure className="w-1/4">
          <img className="w-14 rounded-full" src={img} alt=""/>
        </figure>
        <div className="flex w-full justify-end items-center">
          <span className="span-item groups">
            <GroupsIcon />
          </span>
          <span className="span-item status">
            <Status/>
          </span>
          <span className="span-item channel-news">
            <ChannelUser />
          </span>
          <span className="span-item add-icon">
            <AddUserIcon popUp = {popUp} setPopUp = {setPopUp}/>
          </span>
          <span className="span-item hamburger-menu">
            <ChatHamburgerMenu />
          </span>
        </div>
      </header>
    </>
  );
}
