import { Box } from "@mui/material";
import Userform from "./Userform";
import Usertable from "./Usertable";
import  Axios  from "axios";
import { useEffect, useState } from "react";



const Users=()=>{
    const [users,setUsers]=useState([]);
    const [submitted,setSubmitted]=useState(false);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers=()=>{
        Axios.get('http://localhost:3001/api/users')
            .then(response=>{
                setUsers(response?.data?.response||[])
            })
            .catch(error=>{
                console.log("axios error:",error);
            });
    }

    const addUser=(data)=>{
        setSubmitted(true);
        const payload={
            id:data.id,
            name:data.name,
        }
        Axios.post('http://localhost:3001/api/createuser',payload)
        .then(()=>{
            getUsers();
            setSubmitted(false)
            
        })
        .catch(error=>{
            console.log("axios error:",error);
        });
    }
    return(
        <Box
            sx={{
                width:'calc(100%-10px)',
                margin:'auto',
                marginTop:'20px',

            }}
        >
        <Userform
        addUser={addUser}
        submitted={submitted}
        />
        <Usertable rows={users}/>
        </Box>
    );
}
export default Users;