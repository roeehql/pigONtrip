    export const getToday = () => {
        let today = "";
        const date = new Date();
        const month = (date.getMonth() + 1);
        const day = (date.getDate() !== 1 ? date.getDate() - 1 : date.getDate());
        today = `${date.getFullYear()}-${month < 10 ? "0"+month : month}-${day < 10 ? "0"+day : day}`;
        return today !== "" ? today : "2023-07-01"
    };

    export const getYesterDay = () => {
        let today = "";
        const date = new Date();
        const month = (date.getMonth() + 1);
        const day = (date.getDate() !== 1 ? date.getDate() - 1 : date.getDate());

        const getLastDate = () => {
            let lastDay;
            const lastYear = date.getFullYear() - 1;
            const lastMonth  = month === 1 ? 12 : month - 1;
            if(month === 1 || 2 || 4 || 6 || 8|| 9 || 11) lastDay = 31;
            if(month === 3) lastDay = 28;
            if(month === 5 || 7 || 10 || 12) lastDay = 30;
            return `${lastYear}-${lastMonth < 10 ? "0"+ lastMonth : lastMonth}-${lastDay}`;
        }

        if(day === 1) today = getLastDate()
    
        if(day !== 1) today = `${date.getFullYear()}-${month < 10 ? "0"+ month : month}-${day < 11 ? "0"+(day-1) : day-1}`;

        return today !== "" ? today : "2023-07-01"
  };