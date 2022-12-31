export const getToday = () => {
    let today = "";
        var date = new Date();
        var month = (date.getMonth() + 1);
        var day = (date.getDate() !== 1 ? date.getDate() - 1 : date.getDate());
        today = `${date.getFullYear()}-${month < 10 ? "0"+month : month}-${day < 10 ? "0"+day : day}`;
    if(today === ""){
        getToday();
        return "2022-09-01";
    }else{
        return today;
    }
  };

  export const getYesterDay = () => {
    let today = "";
        var date = new Date();
        var month = (date.getMonth() + 1);
        var day = (date.getDate() !== 1 ? date.getDate() - 1 : date.getDate());
        if(day-1 === 0) {
            let lastDay;
            const lastYear = date.getFullYear() -1;
            const lastMonth  = month === 1 ? 12 : month - 1;
            if(month === 1 || 2 || 4 || 6 || 8|| 9 || 11){
                 lastDay = 31;
            }else if(month === 3){
                lastDay = 28;
            }else{
                lastDay = 30;
            }
            today = `${lastYear}-${lastMonth < 10 ? "0"+ lastMonth : lastMonth}-${lastDay}`;
        }else{
            today = `${date.getFullYear()}-${month < 10 ? "0"+ month : month}-${day < 11 ? "0"+(day-1) : day-1}`;
        }
    if(today === ""){
        getYesterDay();
        return "2022-09-01";
    }else{
        return today;
    }
  };