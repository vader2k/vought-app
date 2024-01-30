import React,{useState, useEffect} from 'react'
import {AiOutlineHome, AiOutlineSearch, AiOutlineMail} from 'react-icons/ai'
import {BsMoonStars} from 'react-icons/bs'
import {AiFillAppstore} from 'react-icons/ai'
import {RxAvatar} from 'react-icons/rx'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSun} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [toggle, settoggle] = useState(true);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
  },[theme])

  const handleThemeSwitched = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <nav className={`flex justify-between items-center py-[30px] px-[20px] h-[80px] border-b border-gray-300 sticky top-0 z-[99] bg-white dark:bg-[#222] dark:text-white `}>
        <div className='flex items-center gap-[30px]'>
          <Link to='/' className='no-underline'>
          <span className='font-bold text-[20px] text-blue-800 sm:flex hidden'>Vought Social</span>
          <span  className='font-bold text-[20px] text-blue-800 sm:hidden flex'>Vought</span>
          </Link>
          <AiOutlineHome className='dark:text-white'/>
          <div onClick={()=> settoggle((prev)=>(!prev))}>
            {
              toggle ? <BsMoonStars className='dark:text-white' onClick={handleThemeSwitched}/> : <BiSun className='dark:text-white' onClick={handleThemeSwitched} />
            }
          </div>
          <AiFillAppstore className='dark:text-white'/>
          <div className='flex items-center gap-2'>
            <AiOutlineSearch className='sm:flex hidden dark:text-white'/>
            <input className='border-b border-gray-300 bg-transparent outline-none px-5 rounded-[5px] sm:flex hidden' type='text' placeholder='search...' />
          </div>
        </div>

        <div className='flex items-center gap-[30px]'>
          <RxAvatar className='dark:text-white'/>
          <AiOutlineMail className='dark:text-white'/>
          <IoIosNotificationsOutline className='dark:text-white'/>
          <div className=' items-center gap-[30px] sm:flex hidden'>
            <img className='w-[30px] rounded-full h-[30px] object-cover' src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            <span className='font-semibold dark:text-white'>King Vader</span>
          </div>
        </div>
    </nav>
  )
}

export default Navbar