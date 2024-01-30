import  Image  from "../../assets/shahrukh.jpg";
import { FaVideo } from "react-icons/fa";
import { data } from "../Context/ContentProvider";
import { useContext } from "react";


const ProfileHeading = () => {
  let { profileHead } = useContext(data);

  return (
    <>
      <header className="bg-gray-100 flex items-center border-l border-gray-400">
        <div className="flex justify-center p-2.5">
          <img className="w-12 rounded-full" src= {profileHead.image == null ? Image : profileHead.image} alt="" />
        </div> 
        <div className="text-sm grow">
          <h1 className="text-base">{profileHead.name == null ? "Jamal" : profileHead.name}</h1>
          <p className="text-xs">Date Added : {profileHead.date == null ? "Date" : profileHead.date}</p>
        </div>
        <div className="heading-end-wrapper flex">
          <span className="mr-5 flex items-center text-slate-400">
            <FaVideo className="mr-2" />
            <svg
              className=""
              viewBox="0 0 17 13"
              height="10"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 17 13"
            >
              <title>chevron-down-alt</title>
              <path
                fill="currentColor"
                d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"
              ></path>
            </svg>
          </span>
          <div className="mr-5 heading-search-message-wrapper text-slate-400 w-full">
            <svg
              className="w-5 text-slate-600"
              viewBox="0 0 24 24"
              height="23"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <title>search-alt</title>
              <path
                fill="currentColor"
                d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
              ></path>
            </svg>
          </div>
          <div className="mr-5 heading-hamburger-menu text-slate-400">
            <svg
              className="w-5 text-slate-600"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <title>menu</title>
              <path
                fill="currentColor"
                d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeading;
