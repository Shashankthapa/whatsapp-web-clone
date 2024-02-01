export function DateTime() {
    let d = new Date();
    
    let zero = d.getMinutes() < 10 ? '0': '' 
    
    let time =
      d.getHours() > 12
        ? `${d.getHours() - 12}:${zero}${d.getMinutes()}pm`
        : `${d.getHours()}:${zero}${d.getMinutes()}am`;

    return time;
  }

  export function setDateTime(setTime,id){
    setTime((prev) => {
        let time = [...prev]
        time[id] = DateTime();
        console.log(time, "profile id : ", id);
        localStorage.setItem('time',JSON.stringify(time));
        return time;
      }            
      )
  }