export const handleStorage = {
  setStorage : (key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStorage : (key:string) => {
    let data = localStorage.getItem(key);
      if(data === null || data === undefined){
        return data = "no data";
      }
    return JSON.parse(data);
  },
  getContentsStorage : (key:string)=>{
    return localStorage.getItem(key)
  },
  removeStorage : (key:string) => {
    localStorage.removeItem(key);
  },
  resetStorage : () => {
    localStorage.clear();
  }
}