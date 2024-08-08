/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import Jagadeesh from './JAGADEESH KUMAR.jpg'
import Sravankumar from './SRAVAN KUMAR.jpg'
import Rasagna from './RASAGNA.jpg'
import Ushakiran from './USHAKIRAN.jpg'
import Mahalakshmi from './MAHALAKSHMI.jpg'

class Staff extends Component {
    render() {
        return (
            <div className="bg-light py-5" id='Staff'>
                <div className="container-xxl container-xl container-lg container-md container-fluid">
                    <div className="d-flex flex-column align-items-center pb-3">
                        <h3 className=""><span className="text-danger">EXPERIENCED</span> STAFF</h3>
                        <p>Meet our dedicated team of inspiring Educators.</p>
                        <div className="design-line"></div>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center my-3">
 

                        {/* STAFF-1 */}
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 staff mx-4">
                        
                            <img 
                                className="img-fluid img-thumbnail w-100 h-75" 
                                id="staff-img1"
                                src={Sravankumar}
                                alt="..."/>

                            {/* Staff details shown button */}
                            <div className="text-start" id="staffbtn">
                                <button className="btn btn-sm btn-outline-primary rounded rounded-5 mt-4 px-3" data-bs-target="#staff-img1-modal" data-bs-toggle="modal">SEE MORE<i className="fa-solid fa-circle-chevron-right ps-2"></i></button>
                            </div>

                            {/* Staff details which shows in BS5-modal */}
                            <div className="modal fade" id="staff-img1-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">K. SRAVAN KUMAR</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column justify-content-center align-items-center py-5">
                                            <h5>Founder</h5>
                                            <small className="">MTech, MSc, BA, PGDCA</small>

                                            <div className="d-flex flex-row media-icons mt-3" id='contact-staff'>
                                                <a href="https://www.facebook.com/sravantheemperor?mibextid=ZbWKwL"
                                                    target='_blank'
                                                    className="btn btn-outline-danger mx-1">
                                                    <i className="fa-brands fa-facebook mx-auto"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/sravan-kumar-konatala/"
                                                    target='_blank'
                                                    className="btn btn-outline-danger mx-1">
                                                    <i className="fa-brands fa-linkedin mx-auto"></i>
                                                </a>
                                                <a href="https://www.instagram.com/thegoodghostteacher?igsh=ZDh5MTJqam95Y2k="
                                                    target='_blank'
                                                    className="btn btn-outline-danger mx-1">
                                                    <i className="fa-brands fa-instagram mx-auto"></i>
                                                </a>
                                                <a href="mailto:sunny22892@gmail.com" className="btn btn-outline-danger mx-1">
                                                    <i className="fa-regular fa-envelope mx-auto"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* STAFF-2 */}
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 staff mx-4">

                            <img 
                                className="img-fluid img-thumbnail w-100 h-75" 
                                id="staff-img2" 
                                src={Ushakiran}
                                alt="..."/>

                            {/* Staff details shown button */}
                            <div className="text-start" id="staffbtn">
                                <button className="btn btn-sm btn-outline-primary rounded rounded-5 mt-4 px-3" data-bs-target="#staff-img2-modal" data-bs-toggle="modal">SEE MORE<i className="fa-solid fa-circle-chevron-right ps-2"></i></button>
                            </div>

                            {/* Staff details which shows in BS5-modal */}
                            <div className="modal fade" id="staff-img2-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">R. USHA KIRAN</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column justify-content-center align-items-center py-5">
                                            <h5>Curriculum Advisor</h5>
                                            <small className="">MA, PGCTE, (PhD) </small>

                                            <div className="d-flex flex-row media-icons mt-3" id='contact-staff'>
                                                <a href="https://www.facebook.com/ushakiranr?mibextid=LQQJ4d"
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/usha-sai-kiran-raghupathula-166a1a67/" 
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                                <a href="https://www.instagram.com/theushakiran/" 
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="mailto:Usha.9885521949@gmail.com" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-regular fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STAFF-3 */}
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 staff mx-4">

                            <img 
                                className="img-fluid img-thumbnail w-100 h-75" 
                                id="staff-img3" 
                                src={Jagadeesh} 
                                alt="..."/>

                            {/* Staff details shown button */}
                            <div className="text-start" id="staffbtn">
                                <button className="btn btn-sm btn-outline-primary rounded rounded-5 mt-4 px-3" data-bs-target="#staff-img3-modal" data-bs-toggle="modal">SEE MORE<i className="fa-solid fa-circle-chevron-right ps-2"></i></button>
                            </div>

                            {/* Staff details which shows in BS5-modal */}
                            <div className="modal fade" id="staff-img3-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">B. JAGADEESH KUMAR </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column justify-content-center align-items-center py-5">
                                            <h5>Co-Ordinator </h5>
                                            <small className="">MSc, B.Ed</small>

                                            <div className="d-flex flex-row media-icons mt-3" id='contact-staff'>
                                                <a href="#" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/jagadeesh-kumar-bolli-6400321ba/"
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="mailto:Jagadeeshkumar888bolli@gmail.com" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-regular fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* STAFF-4 */}
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 staff mx-4">

                            <img 
                                className="img-fluid img-thumbnail w-100 h-75" 
                                id="staff-img4" 
                                src={Mahalakshmi}
                                alt="..."/>

                            {/* Staff details shown button */}
                            <div className="text-start" id="staffbtn">
                                <button className="btn btn-sm btn-outline-primary rounded rounded-5 mt-4 px-3" data-bs-target="#staff-img4-modal" data-bs-toggle="modal">SEE MORE<i className="fa-solid fa-circle-chevron-right ps-2"></i></button>
                            </div>

                            {/* Staff details which shows in BS5-modal */}
                            <div className="modal fade" id="staff-img4-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">K. MAHALAKSHMI </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column justify-content-center align-items-center py-5">
                                            <h5>IT Department</h5>
                                            <small className="">B.TECH</small>

                                            <div className="d-flex flex-row media-icons mt-3" id='contact-staff'>
                                                <a href="#" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/mahalakshmi-kutcharlapati-b28977228/"
                                                    target="_blank"
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                                <a href="#" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="mailTo:Kavyamaha20@gmail.com" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-regular fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* STAFF-5 */}
                        <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-5 col-sm-5 col-8 staff mx-4">

                            <img 
                                className="img-fluid img-thumbnail w-100 h-75" 
                                id="staff-img5" 
                                src={Rasagna}
                                alt="..."/>

                            {/* Staff details shown button */}
                            <div className="text-start" id="staffbtn">
                                <button className="btn btn-sm btn-outline-primary rounded rounded-5 mt-4 px-3" data-bs-target="#staff-img5-modal" data-bs-toggle="modal">SEE MORE<i className="fa-solid fa-circle-chevron-right ps-2"></i></button>
                            </div>

                            {/* Staff details which shows in BS5-modal */}
                            <div className="modal fade" id="staff-img5-modal" tabIndex="-1">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">N. RASAGNA </h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-column justify-content-center align-items-center py-5">
                                            <h6>HUMAN RESOURCE AND ADMINISTRATIVE MANAGER</h6>
                                            <small className="">BTech</small>

                                            <div className="d-flex flex-row media-icons mt-3" id='contact-staff'>
                                                <a href="https://www.facebook.com/rasagna.nacharaju?mibextid=ZbWKwL" 
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/in/rasagna-nacharaju-621a9315a/"
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                                <a href="https://www.instagram.com/rasagna_natcharaju/"
                                                    target='_blank'
                                                    className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="mailto:Rasagnanacharaju@gmail.com" className="btn btn-outline-danger 4 mx-1">
                                                    <i className="fa-regular fa-envelope"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Staff