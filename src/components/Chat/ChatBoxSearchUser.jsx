import { useContext, useState } from "react";
import { data } from "../Context/ContentProvider";
import DefaultImage from "../../assets/shahrukh.jpg";

export default function ChatBoxSearchUser(props) {

    let { val, profileHead, styleChatBox } = props;
    let { setProfileHead, setProfileId, setUserArray, setUserMsg, userArray, profileId } = useContext(data)

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

    function setProfileIdFunc(id) {
        setProfileId(id);
    }

    useState(() => {
        setProfileIdFunc();
    }, [setProfileIdFunc])

    return (
        <>
            <div
                className=""
                style={styleChatBox}
                key={val.id}
                onClick={() => {
                    setProfileHead(val);
                    setProfileIdFunc(val.id);
                    showTodaysDate();
                }}
            >
                <div className="p-2">
                    <img
                        className="w-10 rounded-full"
                        src={(val.image == "" || val.image == null) ? DefaultImage : val.image}
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
        </>
    )
}

