import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
    Button,
    Select
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothById, UpdateCloth } from "../../redux/actions";



  const EditProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [current, setCurrent] = useState({
        currentName:''
    })
    const getUserId = useSelector((state => state.Details))
    const [input, setInput] = useState({
        email: '',
        lastname:'',
        phone: '',
        country: '',
        city: '',
        addres: '',
        name:'',
        roll:'',
        active:''

    })

    useEffect(()=> {
        dispatch(getClothById(id));
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
            roll: getUserId.roll,
            active: getUserId.active
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
        alert("The product has been updated");
        dispatch(UpdateCloth(id, input));
        setInput({
            email: getUserId.email,
            lastname: e.target.value,
            phone: getUserId.phone,
            country: getUserId.country,
            city: getUserId.city,
            addres: getUserId.addres,
            name:e.target.value,
            roll: e.target.value,
            active: e.target.value
        })
    }


  
  
    return (
            <Box>
                <FormControl>
                <form onSubmit={handleSubmit}>
                <FormLabel htmlFor="">Name</FormLabel>
                <Input onChange={(e) => handleInputChange(e)}
                     key='name'
                     type="text"
                     name="name"
                     value={input.name}
                      />
                    <Box>
                    <Text><strong>Last Name</strong></Text>
                    <Text>{getUserId.lastname}</Text>
                    </Box>
                    <Box>
                    <Text><strong>Email</strong></Text>
                    <Text>{getUserId.email}</Text>
                    </Box>
                    <FormLabel htmlFor="">Rol</FormLabel>
                    <Input w='20%' onChange={(e) => handleInputChange(e)}
                     key='roll'
                     type="text"
                     name="roll"
                     value={input.roll}
                      />
                    <FormLabel htmlFor="">Active</FormLabel>
                    <Input w='20%' onChange={(e) => handleInputChange(e)}
                     key='active'
                     type="text"
                     name="active"
                     value={input.active}
                      />
                      <Box textAlign='center'>
                        <Button  type="submit">Update</Button>
                      </Box>
                </form>
                </FormControl>
            </Box>
    )
  };

  export default EditProduct