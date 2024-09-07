import { Grid, Input, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Userform = ({ addUser,submitted }) => {

  const [id, setID] = useState(0);
  const [name, setName] = useState("");

  useEffect(()=>{
    if(!submitted){
        setID(0);
        setName("");
    }
  },[submitted])

  const handleAddUser = () => {
    addUser({ id, name });
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#ffffff',
        marginBottom: '30px',
        display: 'block',
      }}
    >
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: '#000000' }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Typography
          component="label"
          htmlFor="id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: '400px' }}
          value={id}
          onChange={e => setID(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Typography
          component="label"
          htmlFor="name"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block',
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: '400px' }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{
            backgroundColor: "#00c6e6",
            color: '#000000',
            marginTop: "20px",
            "&:hover": {
              opacity: '0.7',
              backgroundColor: '#00c6e6',
            }
          }}
          onClick={handleAddUser} // Use a function reference here
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default Userform;
