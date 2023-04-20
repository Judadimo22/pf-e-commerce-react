import React, { useEffect, useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Text,
    Button,
    Select,
    Icon
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { infoUserById, updateUser } from "../../redux/actions";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { HiLocationMarker, HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineControl ,AiOutlineCheckCircle} from "react-icons/ai";
import Swal from "sweetalert2";








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
        roll:'',
        active:''

    })

    useEffect(()=> {
        dispatch(infoUserById(id));
    },[id]);

    useEffect(() => {
        setInput({
            email: getUserId.email,
            lastname: getUserId.lastname,
            phone: getUserId.phone,
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
        Swal.fire({
            icon: 'success',
            title: '¡Success!',
            text: 'The user info has been updated',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Continue'
          })
        dispatch(updateUser(id, input));
        setInput({
            email: getUserId.email,
            lastname: e.target.value,
            phone: getUserId.phone,
            name:e.target.value,
            roll: e.target.value,
            active: e.target.value
        })
    }

    console.log(getUserId)

    const rol = ['admin', 'user'];
    const active = ['valid', 'invalid']
  
  
    return (
            <Box>
                <FormControl>
                <form onSubmit={handleSubmit}>
                    <Box display='flex' mb={5}>
                    <Text fontWeight={1000} fontSize={30} mr={1}>{getUserId.name}</Text>
                    <Text fontWeight={1000} fontSize={30}>{getUserId.lastname}</Text>
                    </Box>

                    <Box display='flex' justifyContent='space-between' >
                    <Box w={420}  shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <Text fontSize={20} fontWeight={1000}><strong>Country - City</strong></Text>
                        {getUserId.location?.length ? (
                             <Text>{getUserId.location[getUserId.location?.length-1]?.country} - {getUserId.location[getUserId.location?.length-1]?.city}</Text>
                        ) : null}
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><TbMap2/></Icon>
                        </Box>
                    </Box>
                    <Box w={420} shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <Text fontSize={20} fontWeight={1000}><strong>Email</strong></Text>
                        <Text>{getUserId.email}</Text>
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><MdOutlineEmail/></Icon>
                        </Box>
                    </Box>
                    </Box>

                    <Box display='flex' justifyContent='space-between' mt={30}  >
                    <Box w={420}  shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <Text fontSize={20} fontWeight={1000}><strong>Address</strong></Text>
                        {getUserId.location?.length ? (
                             <Text>{getUserId.location[getUserId.location?.length-1]?.addres}</Text>
                        ) : null}
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><HiLocationMarker/></Icon>
                        </Box>
                    </Box>
                    <Box w={420} shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <Text fontSize={20} fontWeight={1000}><strong>Phone</strong></Text>
                        <Text>{getUserId.phone}</Text>
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><BsTelephone/></Icon>
                        </Box>
                    </Box>
                    </Box>

                    <Box display='flex' justifyContent='space-between' mt={30} >
                    <Box w={420} shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <FormLabel fontSize={20}><strong>Active</strong></FormLabel>
                        <Select
                        name ='active'
                        onChange={(e) => handleInputChange(e)}
                        >
                            <option value="">Select Active</option>
                            {
                                active.map(active => (
                                    <option value={active} key={active}>{active}</option>
                                ))
                            }

                        </Select>
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><AiOutlineCheckCircle/></Icon>
                        </Box>
                    </Box>
                    <Box w={420} shadow='md' borderRadius={10} backgroundColor='white' alignItems='center' display='flex' px={10} pt={10} pb={10} justifyContent='space-between'>
                        <Box textAlign='left' mr={20}>
                        <FormLabel fontSize={20}><strong>Rol</strong></FormLabel>
                        <Select
                        name ='roll'
                        onChange={(e) => handleInputChange(e)}
                        >
                            <option value="">Select Rol</option>
                            {
                                rol.map(rol => (
                                    <option value={rol} key={rol}>{rol}</option>
                                ))
                            }

                        </Select>
                        </Box>
                        <Box alignItems='center'>
                            <Icon fontSize={25}><AiOutlineControl/></Icon>
                        </Box>
                    </Box>
                    </Box>  
                      <Box w='100%' textAlign='center' mt={5}>
                        <Button w='100%' backgroundColor='#DAEB0F'  type="submit">Update</Button>
                      </Box>
                </form>
                </FormControl>
            </Box>
    )
  };

  export default UserEdit