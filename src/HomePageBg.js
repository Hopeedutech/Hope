import React, { Component } from 'react'

class HomePageBg extends Component {
    render() {
        return (

            // HOME PAGE BACKGROUND IMAGE
            <div className="homepage-bg d-flex justify-content-center align-items-center" id='HomePage'>
						
                {/* HOME PAGE TEXT */}
                <div className="homepage-txt text-center text-danger">
                    <h1 className='display-3'>
                        Learn To Read
                    </h1>
                    
                    <h2 className='text-danger'>
                        Dive into Learning
                    </h2>

                    <div className='text-center h2' style={{padding:'65px 0px'}}>
                        {/* border border-danger rounded-circle rounded rounded-5 */}
                        <a href="#section" className='' id='caret-down'>
                            <i className="fa-solid fa-angles-down text-danger px-2 py-1"></i>
                        </a>
                    </div>
                </div>                

            </div>            
        )
    }
}

export default HomePageBg

// https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg 