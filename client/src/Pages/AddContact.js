import {  CircularProgress, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { addContact, editContact, getOneContact } from '../JS/Actions/contact'
import "./AddContact.css"


const AddContact = () => {
    const dispatch = useDispatch()
    const history= useHistory()
    const params=useParams()
    const [edit, setEdit] = useState(false)
    const contactState=useSelector((state)=>state.contactReducer.contact)
    const isLoad = useSelector((state) => state.contactReducer.isLoad);
    const isError = useSelector(state => state.contactReducer.isError)
    
    const [contact ,setContact] = useState({})

    
    // **************
    const handleAdd=(e)=>{
       setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleButton=()=>{
        if(contact.name && contact.address)
        {if(!edit)
       { dispatch(addContact(contact,history));
        
      }
        else
        {dispatch(editContact(params.id,contact,history));
         
        }
      }
        else alert('Please fill the required fields: name & address')
    }
    useEffect(() => {
     dispatch(getOneContact(params.id))
    }, [])
    useEffect(() => {
      if(params.id){
         setEdit(true);
      }
      else setEdit(false)
      edit ?  setContact(contactState) : setContact({name:"",address:"",age:""})
    }, [edit,contactState,params.id])
    return (
      edit ?
      (isLoad ? 
        <CircularProgress style={{marginLeft: "29%",marginTop: "3%", padding: "20%"}}/>
      : isError ? (<h1 style={{margin:"20%"}}>Error: Can not get contact </h1>) : 
        ( <div className="add">
      
        <div style={{display:"flex",flexDirection:"column"}}>
          <h1>{edit ? "Edit contact" : "Add contact"}</h1>
          <TextField
            required
            label="Name"
            id="outlined-size-normal"
            defaultValue=" "
            size="normal"
            name="name"
            value={contact.name}
            onChange={handleAdd}
            InputLabelProps={{
              shrink: true,
            }}
          />
           <TextField
            label="Age"
            id="outlined-size-normal"
            size="normal"
            name="age"
            value={contact.age}
            onChange={handleAdd}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            label="Address"
            id="outlined-size-normal"
            size="normal"
            name="address"
            value={contact.address}
            onChange={handleAdd}
            InputLabelProps={{
              shrink: true,
            }}
          />
          
          </div>
          <button onClick={handleButton}>Submit</button>
          
          </div>)): 

          <div className="add">
      
      <div style={{display:"flex",flexDirection:"column"}}>
        <h1>{edit ? "Edit contact" : "Add contact"}</h1>
        <TextField
          required
          label="Name"
          id="outlined-size-normal"
          defaultValue=" "
          size="normal"
          name="name"
          value={contact.name}
          onChange={handleAdd}
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField
          label="Age"
          id="outlined-size-normal"
          size="normal"
          name="age"
          value={contact.age}
          onChange={handleAdd}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          label="Address"
          id="outlined-size-normal"
          size="normal"
          name="address"
          value={contact.address}
          onChange={handleAdd}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        </div>
        <button onClick={handleButton}>Submit</button>
        
        </div>
       
    )
}

export default AddContact
