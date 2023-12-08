/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {
    const links = <>
    <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/work'>WORK</NavLink>
        <NavLink to='/services'>SERVICES</NavLink>
        <NavLink to='/testimonial'>TESTIMONIAL</NavLink>
        <NavLink to='/blog'>BLOG</NavLink>
        <NavLink to='/contacts'>CONTACTUS</NavLink>
    </nav>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        links
                    }
                </ul>
                </div>
                <NavLink to='/'><a className="ml-10 btn btn-ghost text-3xl text-white"><img className="w-11" src="../../../public/img/portfolio1.png" alt="" /> Portfolio</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink><a className="btn text-xl font-normal lg:mr-20 px-8 text-black" style={{backgroundColor:'#E0874B'}}>Let's Talk <IoIosArrowRoundForward></IoIosArrowRoundForward></a></NavLink>
            </div>
        </div>
    );
};

export default Navbar;