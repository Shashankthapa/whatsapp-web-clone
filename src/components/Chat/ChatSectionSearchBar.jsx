import { useContext } from "react";
import { data } from "../Context/ContentProvider";
import SearchUserIcon from "../../assets/svg/SearchUserIcon";

const ChatSectionSearchBar = () => {

  let{setSearchUser} = useContext(data);

  function searchDisplayAction(e){
    setSearchUser(e.target.value);
  }

  return (
    <>
      <section className="flex items-center w-full justify-center p-1">
        <form className="bg-gray-200 flex items-center rounded p-1" style={{width : "90%"}}>
          <i className="fa-solid fa-magnifying-glass text-xs py-1 px-2 flex items-center"></i>
          <input
            className="w-full search-bar focus:outline-none bg-gray-200 rounded flex items-center pl-5 placeholder:text-md"
            type="text"
            placeholder="Search or start new chat"
            onChange={(e) => {searchDisplayAction(e)}}
          />
        </form>
        <div className="filter-unread px-2 invert-[.50]">
          <SearchUserIcon/>
        </div>
      </section>
      <div className="border-b m-0.5" style = {{color : "black"}}></div>
    </>
  );
};

export default ChatSectionSearchBar;
