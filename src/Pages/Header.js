import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiOutlineGithub,AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Header = () => {
    const menuitems=<>
        <li className='font-bold font-sans'><Link to='/'>Home</Link></li>
        <li className='font-bold font-sans'><Link to='/'>About</Link></li>
        <li className='font-bold font-sans'><Link to='/'>Portfolio</Link></li>
        <li className='font-bold font-sans'><Link to='projects'>Projects</Link></li>
    </>;
    return (
        <div class="navbar  bg-black text-neutral-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitems}
                    </ul>
                </div>
                <a href='/' class="btn btn-ghost normal-case text-xl" style={{fontFamily:'Josefin Sans'}}>Pranta Das</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuitems}
                </ul>
            </div>
            <div class="navbar-end lg:block hidden">
                <ul class="menu menu-horizontal p-0">
                    <li><a href="https://www.linkedin.com/in/pranta-das7/" target="_blank"><AiFillLinkedin /></a></li>
                    <li><a href="https://github.com/PrantaDas" target='_blank'><AiOutlineGithub/></a></li>
                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;