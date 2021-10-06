import React from 'react'
import './ContactCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteContact, getOneContact } from '../JS/Actions/contact';
import { Link } from 'react-router-dom';


const ContactCard = ({contact}) => {
  const dispatch = useDispatch()
  
  const handleDelete=()=>{
    let result=window.confirm("Are you sure to delete this item ?")
    if(result)
    {dispatch(deleteContact(contact._id))}
  }
  // const handleEdit=()=>{
  //   dispatch(getOneContact(contact._id))
  // }

    return (
        <div className="cardItem">
             <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>{contact.name}</h2>
        <img src="https://i.pinimg.com/originals/c8/bc/15/c8bc15c7b8b59bda4022a0ac052b4001.jpg" alt="avatar"  />
        <h3>{contact.name}</h3>
        <p>{contact.address}</p>
        <p>{contact.age}</p>
        <Link to={`/editContact/${contact._id}`}><EditIcon onClick={()=>dispatch(getOneContact(contact._id))}/></Link>
        <a><DeleteIcon onClick={handleDelete}/></a>
        
      </div>
    </div>
  </div></div>
        </div>
    )
}

export default ContactCard
