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
    const [current, setCurrent] = useState({
        currentName:''
    })
    const getUserId = useSelector((state => state.DetailUser))
    const [input, setInput] = useState({
        email: '',
        lastname:'',
        phone: '',
        country: '',
        city: '',
        addres: '',
        name:'',
        roll:''

    })

    useEffect(()=> {
        dispatch(getUserById(id));
    },[id]);

    useEffect(() => {
        setInput({
            email: getUserId.email,
            lastname: getUserId.lastname,
            phone: getUserId.phone,
            country: getUserId.country,
            city: getUserId.city,
            addres: getUserId.addres,
            name:getUserId.name,
            roll: getUserId.roll
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
            lastname: e.target.value,
            phone: getUserId.phone,
            country: getUserId.country,
            city: getUserId.city,
            addres: getUserId.addres,
            name:e.target.value,
            roll: e.target.value
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
                    <p>{getUserId.name}</p>
                    <label htmlFor="">Last Name</label>
                    <input onChange={(e) => handleInputChange(e)}
                     key='lastname'
                     type="text"
                     name="lastname"
                     value={input.lastname}
                      />
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => handleInputChange(e)}
                     key='email'
                     type="text"
                     name="email"
                     value={input.email}
                      />
                    <label htmlFor="">Rol</label>
                    <input onChange={(e) => handleInputChange(e)}
                     key='roll'
                     type="text"
                     name="roll"
                     value={input.roll}
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