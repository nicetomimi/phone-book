import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from "react-redux"; 
// 던져주는건 useDispatch, 읽어오는건 usdSelector

const ContactList = () => {

    const contactList = useSelector(state=>state.contactList)

  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (<ContactItem item={item}/>))}
    </div>
  )
}

export default ContactList
