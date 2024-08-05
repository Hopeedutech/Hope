import { Component } from "react";

import educationpng from './educationpng.png'

import Hope from './Hope wallpaper.jpg'

class AboutUs extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="bg-light py-5" id="AboutUs"> 
                <div className="containe-xxl container-xl container-lg">

                    <div className="d-flex flex-column align-items-center">
                        <h3 className=""><span className="text-danger">ABOUT</span> US</h3>
                        <p>Join us in shaping a brighter future together.</p>
                        <div className="design-line"></div>
                    </div>

                    {/* Video/Image */} 
                    <div className="d-flex flex-wrap align-items-center justify-content-between py-4">

                        <img 
                            src={Hope} id="aboutus-img" style={{height:'470px'}} 
                            className="col-xxl-6 col-xl-5 col-lg-5 col-md-5 col-sm-5 col-col-5 img-fluid border border-primary my-2"  
                            alt="..."/>
                        
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-col-6 my-2">

                            <h6><b>WELCOME TO HOPE EDUCATION</b></h6>
                            <p className="py-2">
                                Fueling learning journeys. Explore our diverse educational resources for all ages. Join our community of lifelong learners.
                            </p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            Our History
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            This is the first item's accordion body.
                                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions.											
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            Our Vision
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Our vision at H.O.P.E is to provide progressive education that goes beyond mere academic achievement. 
                                        We believe in nurturing the potential for greatness in every child, leading them towards a more productive and fulfilling life. 
                                        Join us on this journey towards realizing their full potential.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            Our Mission
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our mission at H.O.P.E is to tackle the pandemic of quality teaching by directly providing exceptional educators to students.
                                            We empower teachers to design impactful curricula while ensuring fair compensation for their invaluable efforts. 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="container d-flex flex-wrap justify-content-center pt-2">

                        <div className="d-flex flex-row align-items-center col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-9">
                            <img className="img-fluid w-25" src="https://t4.ftcdn.net/jpg/05/24/13/63/360_F_524136386_C1oKcXByWLsEkxWQtoGoHKOBrh43iCTn.jpg" alt="..."/>
                            <div className="d-flex flex-column ms-3 mt-4">
                                <h6>Peer Learning</h6>
                                <p>Where Interaction and learning never stops</p>
                            </div>	
                            {/* <div className="mx-auto" id="border-vertical"></div> */}
                        </div>

                        

                        <div className="d-flex flex-row align-items-center col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-9">
                            <img className="img-fluid w-25" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7HDhgm4jAlA6XDz27g-1jUwgAbfkZT-C1Fe9sRCWMMsfF1YkF" alt="..."/>
                            <div className="d-flex flex-column ms-3 mt-4">
                                <h6>Learn</h6>
                                <p>From Anywhere</p>
                            </div>			
                            {/* <div className="mx-auto" id="border-vertical"></div> */}
                        </div>

                        <div className="d-flex flex-row align-items-center col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-9">
                            <img className="img-fluid w-25" src="https://t4.ftcdn.net/jpg/00/94/63/15/240_F_94631529_dpdxItTi6GNvRE4iDAGhZ5sCQTF3QSCt.jpg" alt="..."/>
                            <div className="d-flex flex-column ms-3 mt-4">
                                <h6>Pioneering Excellence</h6>
                                <p>Leading the Way in Education</p>
                            </div>					
                            {/* <div className="mx-auto" id="border-vertical"></div> */}
                        </div>

                        <div className="d-flex flex-row align-items-center col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-9">
                            <img className="img-fluid w-25" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-7XRIUKeYJ_7x6Ano4SHqK-qR38NAwweYOX5G8dP4fLl1nDru" alt="..."/>
                            <div className="d-flex flex-column ms-3 mt-4">
                                <h6>1000</h6>
                                <p>Online courses</p>
                            </div>	
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;