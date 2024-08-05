/* eslint-disable jsx-a11y/anchor-is-valid */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap,faUser } from "@fortawesome/free-solid-svg-icons";

// Horizontal Navigation Component :)
function HorNavigation(){
    
    return(
        <nav className="navbar navbar-expand-lg bg-light sticky-top py-2">

            {/* Navigation Logo */}
            <a className="navbar-brand text-danger ps-4 h2" href="#">
                <FontAwesomeIcon className="pe-2" icon={faGraduationCap}/>
                HOPE
            </a>

            {/* Toggle navigation when the screen width has decreased */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId">
                    <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Items */}
            <div className="collapse navbar-collapse" id="collapsibleNavId">

                <ul className="navbar-nav ms-4 me-auto">
                    <li className="nav-item me-4">
                        <a className="nav-link nav1" href="#HomePage">Home</a>
                    </li>

                    <li className="nav-item me-4">
                        <a className="nav-link nav2" href="#AboutUs">About</a>
                    </li>

                    <li className="nav-item me-4">
                        <a className="nav-link nav3" href="#Acheivements">Acheivements</a>
                    </li>

                    <li className="nav-item me-4">
                        <a className="nav-link nav4" href="#Staff">Staff</a>
                    </li>

                    <li className="nav-item me-4">
                        <a className="nav-link nav5" href="#ContactUs">Contact</a>
                    </li>

                    {/* <li className="nav-item me-4 dropdown">
                        <a className="nav-link nav6 dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" >
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li> */}
                </ul>
                
                {/* Login or Signup Button */}
                <div className="ms-auto me-4">
                    <button className="btn btn-outline-danger ms-3">
                        <FontAwesomeIcon className="pe-2" icon={faUser}/>
                        Login / Register
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default HorNavigation;