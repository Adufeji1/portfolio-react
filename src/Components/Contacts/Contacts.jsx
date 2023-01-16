import './Contacts.css';

import React from 'react'

const Contacts = () => {
  return (
    <>
    <div className='bgcontact'>
        <p>Would you love to contact me?</p>
        <label htmlFor="text">Name:
        <input type="text" />
        </label>

        <label htmlFor="text">Phone number:
        <input type="text" />
        </label>

        <label htmlFor="text">Email:
        <input type="text" />
        </label>
    </div>
    </>
  )
}

export default Contacts