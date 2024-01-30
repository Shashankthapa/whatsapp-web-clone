import Styles from "./profile.module.css";
import PopUpForm from "../PopUp/PopUpForm";
import { data } from "../Context/ContentProvider";
import { useContext } from "react";

const background = () => {
  let { userMsg, popUp, profileId } = useContext(data);

  return (
    <div className={`${Styles.backgroundContainer} relative flex flex-col justify-end`}>
      <div className="flex justify-center">
        <div className = "bg-white w-fit p-1">Today's Date</div>
      </div>
      {Object.keys(userMsg).map((val) => {
        if (profileId-1 == val) {
          return userMsg[val].map((value, index) => {
            return (
              <div className="flex justify-end">
                <div key={index}>
                  <div className={`${Styles.fadeInMain} bg-green-400 w-fit p-1 m-2`}>{value}</div>
                </div>
              </div>
            );
          });
        }
      })}
      <PopUpForm className={popUp ? "pop-up-form" : ""} />
    </div>
  );
};

export default background;
