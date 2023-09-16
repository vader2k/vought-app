import React,{useState} from 'react'
import {AiOutlineHome, AiOutlineSearch, AiOutlineMail} from 'react-icons/ai'
import {BsMoonStars} from 'react-icons/bs'
import {GrAppsRounded} from 'react-icons/gr'
import {RxAvatar} from 'react-icons/rx'
import {IoIosNotificationsOutline} from 'react-icons/io'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [toggle, settoggle] = useState(true);


  return (
    <nav className='flex justify-between items-center py-[10px] px-[20px] h-[50px] border-b border-gray-300 sticky top-0 z-[99] bg-white'>
        <div className='flex items-center gap-[30px]'>
          <Link to='/' className='no-underline'>
          <span className='font-bold text-[20px] text-blue-800 sm:flex hidden'>Vought Social</span>
          <span  className='font-bold text-[20px] text-blue-800 sm:hidden flex'>Vought</span>
          </Link>
          <AiOutlineHome/>
          <div>
            {
              toggle ? <BsMoonStars onClick={()=> settoggle((prev)=>(!prev))}/> : <RxAvatar onClick={()=>settoggle((prev)=>(!prev))}/>
            }
          </div>
          <GrAppsRounded/>
          <div className='flex items-center gap-2'>
            <AiOutlineSearch className='sm:flex hidden'/>
            <input className='border-b border-gray-300 outline-none px-5 rounded-[5px] sm:flex hidden' type='text' placeholder='search...' />
          </div>
        </div>

        <div className='flex items-center gap-[30px]'>
          <RxAvatar/>
          <AiOutlineMail/>
          <IoIosNotificationsOutline/>
          <div className=' items-center gap-[30px] sm:flex hidden'>
            <img className='w-[30px] rounded-full h-[30px] object-cover' src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            <span className='font-semibold'>King Vader</span>
          </div>
        </div>
    </nav>
  )
}

export default Navbar