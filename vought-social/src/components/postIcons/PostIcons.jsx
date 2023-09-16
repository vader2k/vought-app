import React,{useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiCommentDots} from 'react-icons/bi'
import {BsFillShareFill,BsThreeDots} from 'react-icons/bs'
import {NavLink } from 'react-router-dom'
import {Comments} from '../../components'


const PostIcons = ({post}) => {
    const [commentOpen , setCommentOpen] = useState(false);
    const [liked, setLiked] = useState(false);


  return (
    <div className='flex flex-col gap-[50px] w-[100%] m-auto'>
        <div className='container sm:p-20 py-10 '>
        <div className='user flex items-center justify-between'>
            <div className='userinfo flex gap-[20px] items-center justify-center '>
                <img className='w-[40px] h-[40px] rounded-[50%] object-cover' src={post.profilePic} alt=''/>
                <div className='details flex flex-col'>
                    <NavLink className='flex gap-5' to={`/profile/${post.id}`}>
                        <span className='font-medium'>
                            {post.name}
                        </span>
                        <span className='text-[14px] text-gray-500'>
                            1 minute ago
                        </span>
                    </NavLink>
                </div>
            </div>
            <BsThreeDots/>
        </div>
        <div className='content my-[20px]'>
            <p>{post.desc}</p>
            <img className='w-[100%] max-h-[700px] object-cover mt-[20px]' src={post.img}/>
        </div>
        <div className='info flex items-center gap-[40px] mt-[20px] p-[10px]'>
            <div className='item flex items-center gap-[10px] cursor-pointer text-[14px]'>
                <div>
                {liked ? <AiOutlineHeart onClick={()=>setLiked((prev)=>(!prev))} className='text-red-900'/> : <AiOutlineHeart onClick={()=>setLiked((prev)=>(!prev))}/> }
                </div>
                12 Likes
            </div>
            <div className='item flex items-center gap-[10px] cursor-pointer text-[14px]' onClick={()=>setCommentOpen((prev)=>(!prev))}>
                <BiCommentDots/>
                comment
            </div>
            <div className='item flex items-center gap-[10px] cursor-pointer text-[14px]'>
                <BsFillShareFill/>
                share
            </div>
        </div>
        {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default PostIcons