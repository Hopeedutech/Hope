import React from 'react'

// import educationpng from './educationpng.png'
import Hope from './HOPE.jpg'

import Trendingcourses from './trending courses.jpg'
import Teachers from './Teachers.png'


function HomepageCards() {
    return (
        <div className="d-flex flex-wrap justify-content-evenly bg-light pb-5 pt-3">

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5 col-7 mt-4">
                <div className="bg-white border border-2 text-center" style={{height:'270px'}} >

                    <div className="cards px-3">

                        <img src={Hope} className="img-fluid w-50" alt="..."/>
                        
                        <h4 className="pb-2">Books & library</h4>
                        <p className="pb-2">
                            Dive into the world of books and libraries, where knowledge and imagination meet.
                        </p>

                    </div>
                </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5 col-7 mt-4">
                <div className="bg-white border border-2 text-center" style={{height:'270px'}}>
                    <div className="cards px-3">

                        <img src={Trendingcourses} className="img-fluid w-50" alt="..."/>

                        <h4 className="pb-2">Trending courses</h4>
                        <p className="pb-2">
                            1st to 12th regular activity based classes with carrier guidance peer  collaboration and experiments
                        </p>

                    </div>
                </div>
            </div>

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-5 col-7 mt-4">
                <div className="bg-white border border-2 text-center" style={{height:'270px'}}>
                    <div className="cards px-3">

                        <img src={Teachers} className="img-fluid w-75" alt="..."/>

                        <h4 className="pb-2">Teachers</h4>
                        <p className="pb-2">
                            Our dedicated team of educators is passionate about guiding students toward success. 
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomepageCards