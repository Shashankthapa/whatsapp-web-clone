import { useContext } from "react";
import ChatBoxSearchUser from "./ChatBoxSearchUser";
import { data } from "../Context/ContentProvider"; // Assuming this is the correct import for the context

const ChatMembersSection = () => {
  let { searchUser, profileHead } = useContext(data); // Correctly using the context object

  const styleChatBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const localStorageMain = JSON.parse(localStorage.getItem('userdata'));  

  return (
    <div className="overflow-auto h-24" style={{ overflow: "auto", height: "78%" }}>
      <div>
        
            { searchUser ?
            localStorageMain.filter(val => val.name === searchUser)
              .map(val => (
                <ChatBoxSearchUser styleChatBox={styleChatBox} key={val.id} val={val} profileHead={profileHead} />
              ))
            : localStorageMain ? localStorageMain.map((val) =>  (
              <ChatBoxSearchUser styleChatBox={styleChatBox} key={val.id} val={val} profileHead={profileHead} />
            )): ""}
        
      </div>
    </div>
  );
};

export default ChatMembersSection;
