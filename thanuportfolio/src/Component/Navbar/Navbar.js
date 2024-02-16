import { Link, Route, Routes } from "react-router-dom"
import './Navbar.css'
import Home from '../Home/Home'
import About from '../About/About'
import Services from "../Services/Services"
import Contact from '../Contact/Contact'
import Login from '../Login/Login'
import Register from '../Register/Register'

function Navbar() {
    return (
        <>
            <div class="navbar">
                <h2>Nature</h2>
                <nav>
                    <ul>
                        <li><a><Link to="/Home">Home</Link></a></li>
                        <li><a><Link to="/About">About</Link></a></li>
                        <li><a><Link to="/Services">Services</Link></a></li>
                        <li><a><Link to="/Contact">Contact</Link></a></li>
                        <li><a><Link to="/Login">Login</Link></a></li>
                        <li><a><Link to="/Register">Register</Link></a></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route exact path='/Home' element={<Home />}></Route>
                <Route exact path='/About' element={<About />}></Route>
                <Route exact path='/Services' element={<Services />}></Route>
                <Route exact path='/Contact' element={<Contact />}></Route>
                <Route exact path='/Login' element={<Login />}></Route>
                <Route exact path='/Register' element={<Register />}></Route>
                
            </Routes>
        </>
    )
}

export default Navbar