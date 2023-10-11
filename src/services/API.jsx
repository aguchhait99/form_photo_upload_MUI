import axios from "axios"

const BaseUrl = "https://tureappservar.onrender.com"

export const getUserData = async()=>{
    try{
        return await axios.get(`${BaseUrl}/alluser`)
    }catch(error){
        console.log("Error while fetching the api", error.message);
    }
}

export const addUserData = async (data)=>{
    try {
        return await axios.post(`${BaseUrl}/user`, data)
    }catch(error){
        console.log("Error while fecthing the api data", error.message);
    }
}