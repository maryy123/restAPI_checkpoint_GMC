import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from '../Components/ContactCard';
import { getAllContacts } from '../JS/Actions/contact'
import CircularProgress from '@mui/material/CircularProgress';



const ContactsList = () => {
    const contacts = useSelector((state) => state.contactReducer.contacts);
    const isLoad = useSelector((state) => state.contactReducer.isLoad);
    const isError = useSelector(state => state.contactReducer.isError)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllContacts())
    }, [dispatch])
    
    

    return (
        isLoad ? 
        <CircularProgress style={{marginLeft: "29%",marginTop: "3%", padding: "20%"}}/>
      : isError ? (<h1 style={{margin:"20%"}}>Error: Can not get contacts </h1>) : (!contacts.length) ? (<h1>No contact to show</h1>) :
        (<div className="list" style={{display:"flex",flexWrap:"wrap"}}>
            {contacts.map(el=><div><ContactCard contact={el} key={el._id}/></div>)}
        </div>)
    )
}

export default ContactsList
