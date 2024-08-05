/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
    return (
        <>

            <div className="media-icons container">
                {/* Outer display-flex */}
                <div className='d-flex flex-row flex-wrap justify-content-center pt-2'>

                    {/* Inner display-flex */}
                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-9 d-flex flex-column mt-4'>

                        <a className="text-danger h4" href="#">
                            <i className="fa-solid fa-graduation-cap"></i> HOPE
                        </a>

                        <p className='text-light mt-3'>
                            {/* Join us in shaping a brighter future together. */}
                            Enhance education with remarkable accomplishments.
                        </p>

                        <div className='d-flex flex-row justify-content-center contact-us-icons me-auto'>
                        
                            <a href="https://www.facebook.com/profile.php?id=100088135977871&mibextid=ZbWKwL" 
                                target='_blank'
                                className="btn btn-outline-danger rounded rounded-4 text-light mx-1">
                                <i className="fa-brands fa-facebook"></i>
                            </a>

                            <a href="https://www.linkedin.com/company/hope-education-technologies/" 
                                target='_blank'
                                className="btn btn-outline-danger rounded rounded-4 text-light mx-1">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            
                            <a href="mailTo:hopeonlines@gmail.com" 
                                target="_blank"
                                className="btn btn-outline-danger rounded rounded-4 text-light mx-1">
                                <i className="fa-regular fa-envelope"></i>
                            </a>

                            <a href="https://www.instagram.com/_this_is_hope__/" 
                                target='_blank'
                                className="btn btn-outline-danger rounded rounded-4 text-light mx-1">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                        </div>

                    </div>  

                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-9 d-flex flex-column mt-4' id='footer-contact-info'>
                        <h4 className='text-danger'>Contact Info</h4>
                        
                        <div className="my-3">   
                            <a href="">
                                <i className="fa-solid fa-phone-flip text-danger pe-2"></i><span>+91 70133 47761</span>
                            </a>
                        </div>

                        <div className="mb-3">   
                            <a href="">
                                <i className="fa-solid fa-phone-flip text-danger pe-2"></i><span>+91 98668 51693</span>
                            </a>
                        </div>

                        <div className="mb-3">   
                            <a href="mailto:sunny22892@gmail.com">
                                <i className="fa-regular fa-envelope text-danger pe-2"></i><span>sunny22892@gmail.com</span>
                            </a>
                        </div>

                        <div className="mb-3">   
                            <a href="">
                                <i className="fa-solid fa-location-dot text-danger pe-2"></i><span>Vizianagram</span>
                            </a>
                        </div>
                        
                    </div>

                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-9 d-flex flex-column mt-4' id='footer-quick-links'>
                        <h4 className='text-danger'>Quick Links</h4>

                        <div className="my-3">                        
                            <a href="#HomePage" >
                                <i className="fa-solid fa-arrow-right text-danger pe-3"></i><span>Home</span>
                            </a>
                        </div>

                        <div className="mb-3">   
                            <a href="#AboutUs">
                                <i className="fa-solid fa-arrow-right text-danger pe-3"></i><span>About</span>
                            </a>
                        </div>
                        
                        <div className="mb-3">   
                            <a href="#Acheivements">
                                <i className="fa-solid fa-arrow-right text-danger pe-3"></i><span>Acheivements</span>
                            </a>
                        </div>

                        <div className="mb-3">   
                            <a href="#Staff">
                                <i className="fa-solid fa-arrow-right text-danger pe-3"></i><span>Staff</span>
                            </a>
                        </div>

                        <div className="mb-3">
                            <a href="#ContactUs">
                                <i className="fa-solid fa-arrow-right text-danger pe-3"></i><span>Contact</span>
                            </a>
                        </div>
                    </div>

                    <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-9 d-flex flex-column mt-4'>
                        <h4 className='text-danger'>News Letter</h4>

                        <p className='text-light mt-3'>Subscribe for Latest Updates</p>
                        
                        <div>
                            <a href="https://youtube.com/@hopeonlines?si=VU30KPhQCwvTTrMD" 
                                target='_blank'
                                className="btn btn-outline-danger rounded rounded-3 text-light px-4">
                                Subscribe<i className="fa-brands fa-youtube ps-2"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="back-line col-12 mt-4 mb-3">
            </div>

            <div id='copyrights' className='py-1'>
               <p className='text-center text-light'> Designed by <span className='text-danger'>Laxman</span> | All Rights Reserved</p>
            </div>

        </>
    )
}

export default Footer