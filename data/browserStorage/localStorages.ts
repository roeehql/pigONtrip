export const setStorage = (key:string, value:string) => {
  localStorage.setItem(key, value);
  return localStorage.getItem(key) !== null ? true : false;
};

export const getStorage = (key:string) => {
  let data = localStorage.getItem(key);
    if(data === null){
      return data = "no data";
    }
    return JSON.parse(data);
};

export const removeStorage = (key:string) => {
  localStorage.removeItem(key);
  return localStorage.getItem(key) === null ? true : false;
};
