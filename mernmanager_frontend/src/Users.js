import { Box } from "@mui/material";
import Userform from "./Userform";
import Usertable from "./Usertable";
import  Axios  from "axios";
import { useEffect, useState } from "react";



const Users=()=>{
    const [users,setUsers]=useState([]);
    const [submitted,setSubmitted]=useState(false);
    const [selectedUser,setSelectedUser]=useState({});
    const [isEdit,setIsEdit]=useState(false);

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
            setSubmitted(false);
            isEdit(false);
            
        })
        .catch(error=>{
            console.log("axios error:",error);
        });
    }

    const updateUser=(data)=>{
        setSubmitted(true);
        const payload={
            id:data.id,
            name:data.name,
        }
        Axios.post('http://localhost:3001/api/updateuser',payload)
        .then(()=>{
            getUsers();
            setSubmitted(false);
            isEdit(false);
            
        })
        .catch(error=>{
            console.log("axios error:",error);
        });
    }

    const deleteUser=(data)=>{
     
       
        Axios.post('http://localhost:3001/api/deleteuser',data)
        .then(()=>{
            getUsers();
            
            
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
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
        />
        <Usertable 
        rows={users}
        selectedUser={data=>{
        setSelectedUser(data);
        setIsEdit(true);

        }}
        deleteUser={data=>window.confirm("Are You Sure?")&& deleteUser(data)}
        />
        </Box>
    );
}
export default Users;