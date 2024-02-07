export const setLocalStorageUser = (userArray) => {
    localStorage.setItem('userdata', JSON.stringify(userArray));
}

export const setLocalStorageMsg = (newState) => {
    localStorage.setItem('usermsg', JSON.stringify(newState));
} 

export const setLocalStorageLastMsg = (lastMsg) => {
    localStorage.setItem('lastmsg', JSON.stringify(lastMsg));   
}

export const getLocalStorageMsg = () => {
    const storedData = localStorage.getItem('usermsg');
    return storedData ? JSON.parse(storedData) : [];
};

const getLastMsg = () => {
    const storedLastMsg = localStorage.getItem('lastmsg');
    return storedLastMsg ? JSON.parse(storedLastMsg) : [];
}

export const setUserMsgs = (setUserMsg,id,setLastMsg,msg,tMsg) => {
        setUserMsg(getLocalStorageMsg());
        setLastMsg(getLastMsg());
        setUserMsg((prev) => {
            let newState = [ ...prev ] 
            if (!newState[id]) {
              newState[id] = [];
            }
            newState[id] = [...newState[id], [msg,tMsg]] 
            setLocalStorageMsg(newState);
            setLastMsg((prev) => {
                let prevMsg = [...prev];
                prevMsg[id] = msg; 
                setLocalStorageLastMsg(prevMsg);
                return prevMsg;
            })
            return newState;
          });
}

export function isUserLocal(){
    const userdata = localStorage.getItem('userdata');
    return userdata ? JSON.parse(userdata) : [];
}


export function addUser(setUserArray, id, date, name, image, setLocalStorageUser) {
    setUserArray(isUserLocal());
    setUserArray((prevUserArray) => {
        const newUserArray = [...prevUserArray, { id: id, name: name, date: date, image: image }];
        setLocalStorageUser(newUserArray);
        return newUserArray;
    })
}