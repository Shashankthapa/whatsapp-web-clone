export const setLocalStorageUser = (userArray) => {
    localStorage.setItem('userdata', JSON.stringify(userArray));
}

export const setLocalStorageMsg = (newState) => {
    localStorage.setItem('usermsg', JSON.stringify(newState));
} 

export const setLocalStorageLastMsg = (lastMsg) => {
    localStorage.setItem('lastmsg', JSON.stringify(lastMsg));   
}

export const setUserMsgs = (setUserMsg,id,setLastMsg,msg) => {
    setUserMsg((prev) => {
        let newState = [ ...prev ] 
        if (!newState[id]) {
          newState[id] = [];
        }
        newState[id] = [...newState[id], msg]
        setLocalStorageMsg(newState);
        // setLastMsg((prev) => [{...prev, [id] : msg}]);
        setLastMsg((prev) => {
            let prevMsg = [...prev];
            prevMsg[id] = msg; 
            setLocalStorageLastMsg(prevMsg);
            return prevMsg;
        })
        return newState;
      });
}

export function addUser(setUserArray, id, date, name, image, setLocalStorageUser) {
    setUserArray((prevUserArray) => {
        const newUserArray = [...prevUserArray, { id: id, name: name, date: date, image: image }];
        setLocalStorageUser(newUserArray);
        return newUserArray;
    })
}