import{ GET_CONTACT_LOAD, GET_CONTACT_SUCCESS, GET_CONTACT_FAIL, GET_ONE_CONTACT } from "../Constants/contact"
import axios from "axios"

export const getAllContacts=()=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        const result=await axios.get('/api/user/')
        dispatch({type:GET_CONTACT_SUCCESS,payload:result.data})
    } catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try{
        await axios.delete(`/api/user/${id}`)
        dispatch(getAllContacts())
    }
    catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const addContact=(data,history)=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try{
        await axios.post(`/api/user/`,data)
        dispatch(getAllContacts())
        history.push("/contacts")
    }
    catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        const contact=await axios.get(`/api/user/${id}`)
        dispatch({type:GET_ONE_CONTACT,payload:contact.data})
    } 
    catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }
}

export const editContact=(id,data,history)=>async(dispatch)=>{
    dispatch({type:GET_CONTACT_LOAD})
    try {
        await axios.put(`/api/user/${id}`,data)
        dispatch(getAllContacts())
        history.push("/contacts")
    } 
    catch (error) {
        dispatch({type:GET_CONTACT_FAIL})
    }

}