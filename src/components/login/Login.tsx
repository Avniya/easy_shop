import React, { useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { setName, setEmail, setImage, createUser } from '@/features/user/userSlice';
import { Button, CssBaseline, TextField, Box, Typography, Container, Modal, IconButton, Avatar } from '@mui/material';

const Login = () => {

  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const name = useAppSelector((state) => state.user.name);
  const email = useAppSelector((state) => state.user.email);
  const image = useAppSelector((state) => state.user.image);
  const userState = useAppSelector((state) => state.user);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:3,
    p: 4,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let user = {
      name : name,
      email : email,
      image :image
    }
    dispatch(createUser(user));
    handleOpen();
    localStorage.setItem('user', JSON.stringify(userState));
  }

  const uploadProfileImage = (pics:any ) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append('file' , pics);
        data.append('upload_preset','todoworld');
        data.append('cloud_name','de3bkua6f');
        fetch("https://api.cloudinary.com/v1_1/de3bkua6f/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setImage(data.url.toString()));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
       console.log("Please select a image of PNG,JPG and JPEG only..");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="xs" sx={{ textAlign : "center", margin : "20px auto"}}>
        <CssBaseline />
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            Login In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Avatar alt="Profile Picture" src={image} sx={{ width: 100, height: 100, margin: "auto" }}/>
          <IconButton color="primary" aria-label="upload picture" component="label" sx={{ margin: "auto" }}>
            <input hidden accept="image/*" type="file" onChange={(e) => uploadProfileImage(e.target.files[0])}/>
            <PhotoCamera />
          </IconButton>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoFocus
              value={name}
              onChange={(e)=>dispatch(setName(e.target.value))}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              value={email}
              onChange={(e)=>dispatch(setEmail(e.target.value))}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login In
            </Button>
          </Box>
        </Box>
      </Container>
      </Modal>
    </div>
  );
};

export default Login;