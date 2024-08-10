/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'

function ContactUs() {

    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [number,setNumber]=useState('')
    const [message,setMessage]=useState('')

    useEffect(()=>{

    },[])

    const submitForm=(e)=>{
        e.preventDefault()
        let date=new Date();

        Email.send({
            Host : 'smtp.elasticemail.com',
            Username : 'laxmanarao.arasavilli1308@gmail.com',
            Password : '1EE1B4C3929E11F2D58351EAC8838D7CAA58',
            To :'20kd1a0703@lendi.org',
            From :'20kd1a0703@lendi.org',
            Subject : "Form Enquiry",
            Body : "Name: "+username+"<br>" + "Email: "+email+"<br>"+ "Subject: "+subject+"<br>"
                    +"Mobile Number: "+number+"<br>" + "message: "+message+"<br>"
            +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
                    
        })
        .then(message => alert("Message captured successfully"))
        .catch((error)=>alert("Message sending Error"));
        alert('Data submitted successfully')
    }

    return (
        <>
            <div className='bg-light py-5' id='ContactUs'>
                <div className='container-xxl container-xl container-lg container-fluid'>
                    <div className="d-flex flex-column align-items-center pb-3">
                        <h3 className=""><span className="text-danger">CONTACT</span> US</h3>
                        <p>Reach out today and let's start your educational journey together.</p>
                        <div className="design-line"></div>
                    </div>

                    <div className='d-flex justify-content-center align-items-center py-4' id='contact-us-wallpaper'>
                       
                        <img 
                            id='contactus-img' 
                            className='img-fluid rounded rounded-5'
                            src='https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.jpg?s=612x612&w=0&k=20&c=ajOYHJPqlaKZ04BeSf5m3MsuZ_YGyxrUqEGMaS1hGGk=' 
                            alt=''/>
                       
                        <div className='text-center' id='contactus-img-text'>
                            <h2 className='display-6' id='contactus-text-h4'>Anywhere From The World</h2>
                              
                            <button className="btn btn-danger rounded rounded-5 my-4 px-3">CONTACT US</button>
                        </div>
                    </div>

                    <div className='d-flex flex-wrap justify-content-evenly py-4' id='Contact-us-details'>
                        <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-10 col-12'>

                            <h5>Get in touch</h5>
                            <p className='pb-3' style={{textAlign:'justify'}}>
                                If you have any queries, Just fill in the contact form and I will answer you shortly. 
                                If you are living nearby come and visit me.
                            </p>
                            <div className='d-flex align-items-center my-2'>
                                <h2><i className="text-danger fa-solid fa-user-tie me-3"></i></h2><span className='h6'>K. Sravan Kumar</span>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <h2><i className="text-danger fa-solid fa-location-dot me-4"></i></h2><span className='h6'>Vizianagram</span>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <h2><i className="text-danger fa-regular fa-envelope me-3"></i></h2><span className='h6'>sunny22892@gmail.com</span>
                            </div>
                            
                        </div>

                        <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-sm-10 col-12 Form'>

                            {/* Contact us Form */}
                            <form className='was-validated' onSubmit={(e)=>submitForm(e)}>

                                <div className='d-flex flex-wrap justify-content-center'>

                                    {/* User-Name input field */}
                                    <div className='form-floating mb-3 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 pe-3'>
                                        <input 
                                            type="text"
                                            value={username}
                                            onChange={(e)=>setUserName(e.target.value)}
                                            className='form-control'
                                            id='userName'
                                            name='userName'  
                                            placeholder=''
                                            required
                                        />
                                        <label htmlFor='userName' className='form-label'>
                                            Enter Your Name
                                        </label>
                                        <div className='valid-feedback'></div>
                                        <div className='invalid-feedback'>Kindly fill this field</div>
                                    </div>
                                    
                                    {/* Email input field */}
                                    <div className='form-floating mb-3 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 pe-3'>
                                        <input 
                                            type="email"
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                            className='form-control'
                                            id='email'
                                            name='email'  
                                            placeholder=''
                                            required
                                        />
                                        <label htmlFor='email' className='form-label'>
                                            Enter Your E-Mail
                                        </label>
                                        <div className='valid-feedback'></div>
                                        <div className='invalid-feedback'>Kindly fill this field</div>
                                    </div>
                                    
                                    {/* Subject describes the main motto of the user */}
                                    <div className='form-floating mb-3 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 pe-3'>
                                        <input 
                                            type="text"
                                            value={subject}
                                            onChange={(e)=>setSubject(e.target.value)}
                                            className='form-control'
                                            id='subject'
                                            name='subject'  
                                            placeholder=''
                                            required
                                        />
                                        <label htmlFor='subject' className='form-label'>
                                            Subject
                                        </label>
                                        <div className='valid-feedback'></div>
                                        <div className='invalid-feedback'>Kindly fill this field</div>
                                    </div>
                                    
                                    {/* User Mobile Number */}
                                    <div className='form-floating mb-3 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-10 pe-3'>
                                        <input 
                                            type="tel"
                                            value={number}
                                            onChange={(e)=>setNumber(e.target.value)}
                                            className='form-control'
                                            id='mblNumber'
                                            name='mblNumber'  
                                            placeholder=''
                                            required
                                        />
                                        <label htmlFor='mblNumber' className='form-label'>
                                            Enter Your Mobile Number
                                        </label>
                                        <div className='valid-feedback'></div>
                                        <div className='invalid-feedback'>Kindly fill this field</div>
                                    </div>

                                    {/* textarea -> user sends a message */}
                                    <div className='form-floating mb-3 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 pe-3'>
                                        <textarea

                                            type="text"
                                            value={message}
                                            onChange={(e)=>setMessage(e.target.value)}
                                            className='form-control '
                                            id='description'         
                                            name='description'
                                            placeholder=''
                                            required
                                        >
                                        </textarea>
                                        <label htmlFor='description' className='form-label'>
                                            Message
                                        </label>
                                        <div className='valid-feedback'></div>
                                        <div className='invalid-feedback'>Kindly fill this field</div>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button type='submit' id='form-submit-btn' className='btn btn-primary px-4 py-2 mt-4'>
                                        <i className="fa-regular fa-paper-plane me-2"></i>
                                        Submit
                                    </button>
                                </div>

                            </form>
        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs