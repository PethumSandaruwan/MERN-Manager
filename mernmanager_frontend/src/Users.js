import { Box } from "@mui/material";
import Userform from "./Userform";
import Usertable from "./Usertable";

const users=[
  {  
    id:1,
    name:'pethum',

},
{
    id:2,
    name:"Tharushi",
}
];

const Users=()=>{
    return(
        <Box
            sx={{
                width:'calc(100%-10px)',
                margin:'auto',
                marginTop:'20px',

            }}
        >
        <Userform/>
        <Usertable rows={users}/>
        </Box>
    );
}
export default Users;