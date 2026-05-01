import React from 'react'

function Contact() {
    const [formData, setFormData] =useState({

        name: '',
        email: '',
        message: '',
    })
  return (
    <div>
        <input type="text" placeholder='Name' />
        <input type="email"placeholder='Email' />
        <textarea placeholder="message"></textarea>

    </div>
  )
}

export default Contact