import { useContext, useEffect, useState } from "react";
import { data } from "../Context/ContentProvider";

const ChatBox = (prop) => {
  let {
    userArray,
    setUserArray,
    profileHead,
    setProfileHead,
    setProfileId,
    userMsg,
    profileId,
    setUserMsg,
    lastMsg,
    time
  } = useContext(data);

  function handleDel(id) {
    setUserArray(userArray.filter((e) => e.id != id));
    setProfileHead({});
    setUserMsg((prev) => {
      const newUserMsg = { ...prev };
      const newUserMsgArr = Object.keys(newUserMsg).map((keys) => [
        newUserMsg[keys],
      ]);
      if (newUserMsgArr[profileId]) {
        newUserMsgArr.splice(profileId, 1);
      }
      return newUserMsgArr;
    });
  }

  function showTodaysDate() {
    let date = new Date();
    return date.getDate();
  }

  return (
    <div>
      {/* {console.log(localStorage)} */}
      {localStorage.length > 0 ? JSON.parse(localStorage.getItem('userdata')).map((val) => {
        return (
          <div
            className=""
            style={prop.styleChatBox}
            key={val.id}
            onClick={() => {
              setProfileHead(val);
              setProfileId(val.id);
              showTodaysDate();
            }}
          >
            <div className="p-2">
              <img
                className="w-10 rounded-full"
                src={val.image == "" ? "" : val.image}
                alt="demo-profile"
              />
            </div>
            <div className="chatbox-text w-3/4 p-2 text-sm flex border-b-2 ">
              <div className="w-3/4 grow">
                <div className="text-base">{val.name}</div>
                <div className="break-words text-xs">
                  {/* {console.log(JSON.parse(localStorage.getItem('lastmsg')))} */}
                  {JSON.parse(localStorage.getItem('lastmsg')) == undefined ? "" : JSON.parse(localStorage.getItem('lastmsg'))[val.id]}
                </div>
              </div>
              <div className="chatbox-delete flex items-center">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDel(val.id);
                  }}
                  className="text-xs"
                >
                  {JSON.parse(localStorage.getItem('time'))[val.id]}
                </div>
              </div>
            </div>
          </div>
        )
      }) : ""}
    </div>
  );
};

export default ChatBox;
