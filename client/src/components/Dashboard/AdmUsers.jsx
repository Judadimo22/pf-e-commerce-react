import React, { useEffect } from "react";
import Users from "./Users";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/actions";

const AdmUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.Users)
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    return(
            <Users users={users}/>
    )
};

export default AdmUsers;