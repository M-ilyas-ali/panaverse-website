'use client'
import React,{useEffect,useState} from 'react';
import Link from 'next/link';

import {navLinks} from'../../constants';
const Navbar = () => {
  const[Active,setActive]=useState('')
  let [toggle,settoggle]=useState(false)
  return (
    <nav
    className='sm:px-16 px-6 h-12 w-full flex items-center py-5 sticky top-0 z-20 bg-gray-700 shadow-2xl shadow-gray-200'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href='/Main' className='flex items-center gap-2 'onClick={()=>{setActive("");window.scrollTo(0,0)}}><img src='/assets/logo.png'alt='logo' className='w-14 h-14 object-contain rounded-full'></img></Link>
         <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            
            <li key={link.id} className={'${active===link.title ?"text-white:text-secondary"} hover:text-white text-[18px] font-md cursor-pointer'}>
              <Link href="/Courses">{link.title}</Link>
            </li>
          ))}
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center '><img src={toggle ? '/assets/close.svg':'/assets/menu.svg'} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>settoggle(!toggle)}></img>
          </div>
          <div className={`${!toggle ?'hidden':'flex'} sm:hidden p-10 bg-gradient-to-tr from-gray-600 to-gray-700 absolute top-20 right-0 mx-2 my-2 mix-w[100px] z-10 rounded-xl shadow-2xl shadow-gray-200`}>
          <ul className='list-none h flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link)=>(
            
            <li key={link.id3} className={'${active===link.title ?"text-white:text-secondary"} font-poppins font-medium cursor-pointer text-white text-md'}onClick={()=>{settoggle(!toggle);setActive(link.title)}}>
              <Link href="/Teachers_timeline">Teachers</Link>
            </li>
          ))}
         </ul>
        
          </div>
      </div>
    </nav>
  )
}

export default Navbar