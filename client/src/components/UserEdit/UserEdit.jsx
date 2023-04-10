import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Text
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../../redux/actions";
import { getUserById } from "../../redux/actions";


  const UserEdit = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const getUserId = useSelector((state => state.DetailUser))
    const [input, setInput] = useState({
        email: '',
        phone: '',
        country: '',
        city: '',
        addres: '',
        name:''
    })

    useEffect(()=> {
        dispatch(getUserById(id));
    },[id]);

    useEffect(() => {
        setInput({
            email: getUserId.email,
            phone: getUserId.phone,
            country: getUserId.country,
            city: getUserId.city,
            addres: getUserId.addres,
            name:getUserId.name
        })
    },[getUserId])

    function handleInputChange(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateUser(id, input));
        setInput({
            email: getUserId.email,
            phone: getUserId.phone,
            country: getUserId.country,
            city: getUserId.city,
            addres: getUserId.addres,
            name:getUserId.name

        })
    }
  
  
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input onChange={(e) => handleInputChange(e)}
                     key='name'
                     type="text"
                     name="name"
                     value={input.name}
                      />
                      <div>
                        <button type="submit">Update</button>
                      </div>
                </form>
            </div>
        </div>
    )
  };

  export default UserEdit