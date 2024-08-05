import React, { Component } from 'react'
import std1 from './std1.png'
import std2 from './std2.png'
import std3 from './std3.png'
import std4 from './std4.png'
import std5 from './std5.png'

class Acheivments extends Component {   
    render() {
        return (
            <>
            <div className="bg-light py-5" id='Acheivements'>
                <div className="container">
                    <div className="d-flex flex-column align-items-center pb-3">
                        <h3 className=""><span className="text-danger">SUCCESS</span> STORIES</h3>
                        <p>Elevate education through remarkable Achievements.</p>
                        <div className="design-line"></div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <div id="carouselExampleCaptions" className="col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-12 carousel slide my-4" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button className='bg-dark active' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-12">
                                <div className="carousel-item active">
                                    
                                    <img src={std1} className="d-block w-100 rounded rounded-5 img-fluid img-thumbnail" alt="..." style={{height:'390px'}}/>

                                </div>
                                <div className="carousel-item">
                                    
                                    <img src={std2} className="d-block rounded rounded-5 w-100 img-fluid img-thumbnail" alt="..." style={{height:'390px'}}/>

                                </div>
                                <div className="carousel-item">
                                    
                                    <img src={std3} className="d-block rounded rounded-5 w-100 img-fluid img-thumbnail" alt="..." style={{height:'390px'}}/>

                                </div>
                                <div className="carousel-item">
                                    
                                    <img src={std4} className="d-block rounded rounded-5 w-100 img-fluid img-thumbnail" alt="..." style={{height:'390px'}}/>
                                    <div className="carousel-caption d-md-block">
                                        <span className='text-light px-4'>And.. many more such</span>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    
                                    <img src={std5} className="d-block rounded rounded-5 w-100 img-fluid img-thumbnail" alt="..." style={{height:'390px'}}/>
                                    <div className="carousel-caption d-md-block">
                                        <span className='text-light px-4'>And.. many more such</span>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-12 pt-xl-5 py-3 ps-3'>
                            
                            <ol>
                                <li className='pb-2'>
                                    <span>R Sujith:</span>
                                    <ul style={{textAlign:'justify'}}>
                                        <li>Former student of Hope Edu Tech, now excelling at FIIT-JEE.</li>
                                        <li>Journeyed from Hope Edu Tech to FIIT-JEE, aiming for top rank in IIT JEE.</li>
                                        <li>Represents the impact of quality education and dedication.</li>
                                    </ul>
                                </li>

                                <li className='pb-2'>
                                    <span>V Karuna Reshma:</span>
                                    <ul style={{textAlign:'justify'}}>
                                        <li>Dedicated student at Hope Edu Tech, aspiring for NEET.</li>
                                        <li>Pursued dream of becoming a doctor with resilience and commitment.</li>
                                        <li>Secured admission to prestigious medical school, showcasing power of education and determination.</li>
                                    </ul>
                                </li>

                                <li className='pb-2'>
                                    <span>S Rishika:</span>
                                    <ul style={{textAlign:'justify'}}>
                                        <li>Former student at Hope Edu Tech, now an IIT-JEE ranker (2022-23).</li>
                                        <li>Built solid foundation at Hope Edu Tech, excelled in academics and extracurriculars.</li>
                                        <li>Achieved dream of pursuing engineering at an IIT, highlighting transformative power of education and determination.</li>
                                    </ul>
                                </li>
                            </ol>

                        </div>
                    </div>

                    
                </div>
            </div>
            </>
        )
    }
}

export default Acheivments