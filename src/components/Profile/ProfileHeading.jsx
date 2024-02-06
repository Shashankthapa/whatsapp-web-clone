import  Image  from "../../assets/shahrukh.jpg";
import { FaVideo } from "react-icons/fa";
import { data } from "../Context/ContentProvider";
import { useContext } from "react";
import Menu from "../../assets/svg/profileHamburgerMenu"
import Search from "../../assets/svg/search";
import VideoRecorderOption from "../../assets/svg/videoRecorderOption";

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
            <VideoRecorderOption />
          </span>
          <div className="mr-5 heading-search-message-wrapper text-slate-400 w-full">
            <Search />
          </div>
          <div className="mr-5 heading-hamburger-menu text-slate-400">
            <Menu/>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeading;
