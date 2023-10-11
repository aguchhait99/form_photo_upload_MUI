import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const AddData = () => {
  const initialstate = {
    name: "",
    city: "",
    email: "",
    phone: "",
    photo: "",
  };

  const [user, setUser] = useState(initialstate);
  const [img, setImg] = useState();

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (data) => {
    data.preventDefault();
    const Url = "https://tureappservar.onrender.com/user"
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("city", user.city);
    formData.append("phone", user.phone);
    formData.append("photo", img);
    axios.post(Url, formData);
    toast.success("Data added successfully!!")
    navigate("/showdata")
  };
  return (
    <>
      <Container maxWidth="sm" sx={{mt: 12}}>
        <h1 style={{ textAlign: "center" }}>Add User Data</h1>
        <form onSubmit={onSubmit}>
          <FormGroup
            style={{
              width: "60%",
              margin: "auto",
              padding: 30,
              boxShadow: "0px 0px 30px rgba(0,0,0,0.5)",
            }}
          >
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Name</InputLabel>
              <Input type="text" name="name" onChange={handleChange} value={user.name} />
            </FormControl>
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Email</InputLabel>
              <Input type="email" name='email' onChange={handleChange} value={user.email} />
            </FormControl>
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Phone</InputLabel>
              <Input type="number" name='phone' onChange={handleChange} value={user.phone} />
            </FormControl>
            <FormControl sx={{ paddingBottom: 3 }}>
              <InputLabel>City</InputLabel>
              <Input type="text" name='city' onChange={handleChange} value={user.city} />
            </FormControl>
            <FormControl>
              <InputLabel>Image</InputLabel>
              <Input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                name="img"
                accept="image/*"
              />
            </FormControl>
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 5 }}
              type="submit"
            >
              Add Data
            </Button>
          </FormGroup>
        </form>
      </Container>
    </>
  );
};

export default AddData;
