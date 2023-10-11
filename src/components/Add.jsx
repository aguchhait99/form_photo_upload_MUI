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
import { addUserData } from "../services/API";
import axios from "axios";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit, error } = useForm();
  const onSubmit = async (data) => {
    try{
        const formData = new FormData();
        formData.append('image', data);
        const apiData = await addUserData(formData)
    if(apiData){
      toast.success("Data has been added successfully!");
    }else{
      toast.error("Something went wrong")
    }
    }catch(error){
        console.log('error');
    }
    
    
  // alert(JSON.stringify(data));
};
  return (
    <>
      <Container maxWidth="sm">
        <h1 style={{ textAlign: "center" }}>Add Userrr Data</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            style={{
              width: "60%",
              margin: "auto",
              padding: 30,
              boxShadow: "0px 0px 30px rgba(0,0,0,1)",
            }}
          >
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Name</InputLabel>
              <Input type="text" {...register("name")}
                  required />
            </FormControl>
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Email</InputLabel>
              <Input type="email" {...register("email")}
                  required/>
            </FormControl>
            <FormControl sx={{ paddingBottom: 2 }}>
              <InputLabel>Phone</InputLabel>
              <Input type="number" {...register("phone")}
                  required/>
            </FormControl>
            <FormControl sx={{ paddingBottom: 3 }}>
              <InputLabel>City</InputLabel>
              <Input type="text" {...register("city")}
                  required/>
            </FormControl>
            <FormControl>
              <InputLabel>Image</InputLabel>
              <Input type="file" name="img" accept="image/*" ref = {{...register ('photo')}}
                  required/>
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

export default Add;
