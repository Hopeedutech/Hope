/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import AboutUs from './AboutUs.js'

import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Component } from "react";

import Staff from "./Staff.js";
import HomePageBg from "./HomePageBg.js";
import Acheivments from "./Acheivments.js";
import ContactUs from "./ContactUs.js";
import Footer from "./Footer.js";
import SectionDivider from "./SectionDivider.js";
import HorNavigation from "./HorNavigation.js";
import Cards from "./HomepageCards.js";

class App extends Component{
	
	constructor(props) {
		super(props)
		
		this.state = {

		}
	}

	componentDidMount() { 

		// How much page was scrolled so far by the user :)
		document.addEventListener('scroll',()=>{
			const scrolldisplay=document.getElementById("scroll-display")
			const scrollheight=document.documentElement.scrollTop

			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (scrollheight / height) * 100
			scrolldisplay.style.width=scrolled+"%"


			// Navigate to the top of the page :)
			const navigateToTop=document.getElementById('nav-to-top')

			if(scrollheight>250)
				navigateToTop.style.display='block'
			else
				navigateToTop.style.display='none'
		})	
	}

    render (){
		return(
			<>
				
				{/* NAVIGATION Component*/}
				<HorNavigation/>


				{/* Describes how much page was scrolled by an user so far */}
				<div className="" id="scroll-display"></div>


				{/* HomePageBg Component*/}
				<HomePageBg/>


				{/* Navigate to top */}
				<div className="fixed-bottom text-end me-4 ms-auto mb-3" id="nav-to-top" style={{display:'none'}}>
					<a href="#HomePage" className="rounded btn btn-outline-danger">
						<i className="fa-solid fa-circle-arrow-up"></i>
					</a>
				</div>


				{/* SECTION */}
				<section id="section">

					{/* CARDS */}
					<Cards/>
					
					{/* SECTION-DIVIDER */}
					<SectionDivider/>


					{/* ABOUT US Component*/}
					<AboutUs/>
					

					{/* SECTION-DIVIDER */}
					<SectionDivider/>


					{/* ACHEIVMENTS Component*/}
					<Acheivments/>


					{/* SECTION-DIVIDER */}
					<SectionDivider/>


					{/* STAFF Component*/}
					<Staff/>


					{/* SECTION-DIVIDER */}
					<SectionDivider/>

					
					{/* CONTACT-US Component */}
					<ContactUs/>


				</section>

			{/* FOOTER Component  */}
			<footer className="">
				<Footer/>
			</footer>

			</>
		)
	}
}

export default App;