import React, { useState} from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import './Header.css'
import {Link} from 'react-scroll';

function Header() {
  const mobile = window.innerWidth<= 768 ? true: false;
  const [menuOpen,setMenuOpen] = useState(false);
  console.log(mobile);  
  
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        {(menuOpen === false && mobile === true)?
       ( <div
         style={{background:"transparent",position:"relative",
         top:"-2rem",right:"-2rem",cursor:'pointer'}}

         onClick={()=>{
          setMenuOpen((prev=>!prev))
         }}
         >

        <img src={Bars} alt=""
        style={{width:"1.5rem" ,height: "1.5rem"}} />
        </div>)
        :(
          
        <>
        <div
         style={{background:"transparent",position:"relative",
         top:"-2rem",right:"-2rem",cursor:'pointer',display: !mobile && "none"}}

         onClick={()=>{
          setMenuOpen((prev=>!prev))
         }}
         >

        <img src={Bars} alt=""
        style={{width:"1.5rem" ,height: "1.5rem"}} />
        </div>
        
        <ul className='header-menu'>
             <li>
              <Link
              onClick={()=>setMenuOpen((prev)=>!prev)} 
              to="home" span={true} 
              smooth={true}>Home</Link></li>
            <li>
              <Link
              onClick={()=>setMenuOpen((prev)=>!prev)} 
              to="programs" span={true} 
              smooth={true}>Programs</Link></li>
             <li>
              <Link
              onClick={()=>setMenuOpen((prev)=>!prev)} 
              to="reasons" span={true} 
              smooth={true}>Reasons</Link></li>
            <li>
              <Link
              onClick={()=>setMenuOpen((prev)=>!prev)} 
              to="plans" span={true} 
              smooth={true}>Plans</Link></li>
            <li>
              <Link
              onClick={()=>setMenuOpen((prev)=>!prev)} 
              to="testimonials" span={true} 
              smooth={true}>Testimonials</Link></li>
        </ul>
        </>
      )
        }
        
    </div>
  )
}

export default Header