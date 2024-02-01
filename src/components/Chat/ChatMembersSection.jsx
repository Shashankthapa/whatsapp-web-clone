import ChatBox from "./ChatBox";
import { data } from "../Context/ContentProvider";
import { useContext, useEffect } from "react";
import { MdDelete } from "react-icons/md";

const ChatMembersSection = () => {
  let { searchUser, userArray, profileHead } = useContext(data);

  const styleChatBox = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div
        className="overflow-auto h-24"
        style={{ overflow: "auto", height: "78%" }}
      >
        {(userArray || userArray.length > 0) && (searchUser != '') ?
          userArray.filter((val) => val.name === searchUser).map(val => (
            <div
              className=""
              style={styleChatBox}
              key={val.id}
              onClick={(e) => {
                profileHead(val);
              }}
            >
              <div className="p-2">
                <img
                  className="w-10 rounded-full"
                  src={val.image ? URL.createObjectURL(val.image) : ""}
                  alt="demo-profile"
                />
              </div>
              <div className="chatbox-text w-3/4 p-2 text-sm flex border-b-2 ">
                <div className="w-3/4 grow">
                  <div>{val.name}</div>
                  <div>{val.date}</div>
                </div>
                <div className="chatbox-delete flex items-center">
                  <MdDelete
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDel(val.id);
                    }}
                  />
                </div>
              </div>
            </div>
          )) :
          <ChatBox styleChatBox={styleChatBox} />
        }

        {/* {searchUser ? (
          userArray
            .filter((val) => val.name === searchUser)
            .map((val) => (
              <div
                className=""
                style={styleChatBox}
                key={val.id}
                onClick={(e) => {
                  profileHead(val);
                }}
              >
                <div className="p-2">
                  <img
                    className="w-10 rounded-full"
                    src={val.image ? URL.createObjectURL(val.image) : ""}
                    alt="demo-profile"
                  />
                </div>
                <div className="chatbox-text w-3/4 p-2 text-sm flex border-b-2 ">
                  <div className="w-3/4 grow">
                    <div>{val.name}</div>
                    <div>{val.date}</div>
                  </div>
                  <div className="chatbox-delete flex items-center">
                    <MdDelete
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDel(val.id);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))
        ) : (
          <ChatBox styleChatBox={styleChatBox} />
        )} */}
      </div>
    </>
  );
};

export default ChatMembersSection;
