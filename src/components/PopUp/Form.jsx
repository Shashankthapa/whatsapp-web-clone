import { MdOutlineCancel } from "react-icons/md";
import { data } from "../Context/ContentProvider";
import { useContext, useRef, useState } from "react";
import { addUser,setLocalStorageUser } from "../utils/storage";
import { setDateTime } from "../utils/date";

export default function Form(prop) {
	
	let {popUp,setPopUp,setUserArray,id,setId,setImage,image,setTime} = useContext(data);
  
	let [name, setName] = useState("");
	let [date, setDate] = useState("");
  
  const inputRef = useRef();
  
  function closePopUp(){
    popUp ? setPopUp(false) : setPopUp(true);
  }

  function submitHandler(e){
    e.preventDefault();
    closePopUp(); 
    addUser(setUserArray,id,date,name,image,setLocalStorageUser);
    setDateTime(setTime,id);
  }

  return (
    <form
      className={`${prop.className} mx-auto mt-10 w-2/5 bg-transparent shadow-md rounded px-8 pb-8 pt-6 mb-4 absolute 
      left-0 right-0`}
			onSubmit={(e) => {submitHandler(e);}}
		>
      <div className="w-full mb-4 flex justify-end">
        <a onClick = {() => {closePopUp()}}><MdOutlineCancel className = "w-5" style={{color : "black"}}/></a>
      </div>
      <div className="w-full mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name : 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter your name"
					onChange = {(e) => {setName(e.target.value);}}
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
					onChange= {(e) => {setDate(e.target.value);}}
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image :
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          ref = {inputRef}
          onChange={(e) => {setImage(URL.createObjectURL(e.target.files[0]))}}
        />
      </div>

      <div className="w-full">
        <div className="w-full flex justify-center">
          <input
            className="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
						value = "Submit"
            onClick={(e) => {
              e.stopPropagation(); 
              setId(prevId => prevId + 1);
            }}
					/>
        </div>
      </div>
    </form>
  );
}
