import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserList, selectUser } from "@data/store/userNameSlice"

export const useGetUserName = ()=>{
    const users = useSelector(selectUser)
    const dispatch = useDispatch()
    const [isUserLoggedIn , setIsUserLoggedIn] = useState(false)
    const [userName , setUserName] = useState("")


    const getCurrentUserName = () => {
        if(users.length){
            setUserName(users.filter(user=>user.isLoggedIn === true).length > 0 ? users.filter(user=>user.isLoggedIn === true)[0].name : "")
        }
    }

    const checkLoggedInUser = ()=> { 
        setIsUserLoggedIn(users.some(user=>user.isLoggedIn === true)) 
    }

    useEffect(() => {
        dispatch(getUserList());
      }, [dispatch]);

      useEffect(()=> {
        getCurrentUserName()
        checkLoggedInUser()
      },[])

    return {getCurrentUserName,userName, checkLoggedInUser, isUserLoggedIn}
}