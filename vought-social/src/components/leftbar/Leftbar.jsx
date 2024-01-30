import React from 'react'
import { leftbarFirst,leftbarSecond,leftbarThird } from '../../constants'

const Leftbar = () => {
  return (
    <section className='flex-[2] sticky left-bar overflow-y-scroll sm:block hidden dark:bg-[#222] dark:text-white'>
      <div className='p-[20px] flex flex-col gap-[30px]'>
        <div className='flex flex-col gap-[20px]  '>
          <div className='flex items-center gap-5'>
            <img className='w-[30px] rounded-full h-[30px] object-cover' src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
            <span className='font-semibold'>king vader</span>
          </div>
          <div className='flex flex-col gap-5 cursor-pointer'>
          {
              leftbarFirst.map(({name, img}, index)=> (
                <div className='flex items-center gap-5' key={index}>
                  <img className='w-[30px] h-[30px]' src={img}/>
                  <p className='text-[14px]'>{name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <hr className='border-b border-gray-300 w-[100%]'/>
        <div className='flex flex-col gap-[20px] cursor-pointer'>
          <p className='text-[14px] font-semibold text-gray-500'>Your shortcuts</p>
          <div className='flex flex-col gap-5'>
          {
              leftbarSecond.map(({name, img}, index)=> (
                <div className='flex items-center gap-5' key={index}>
                  <img className='w-[30px] h-[30px]' src={img}/>
                  <p className='text-[14px]'>{name}</p>
                </div>
              ))
            }
          </div>
        </div>

        <hr className='border-b border-gray-300 w-[100%]'/>        
        <div className='flex flex-col gap-[20px] cursor-pointer'>
          <div className='flex flex-col gap-5'>
          <p className='text-[14px] font-semibold text-gray-500'>others</p>
          {
              leftbarThird.map(({name, img}, index)=> (
                <div className='flex items-center gap-5' key={index}>
                  <img className='w-[30px] h-[30px]' src={img}/>
                  <p className='text-[14px]'>{name}</p>
                </div>
              ))
            }
          </div>
        </div>
        


      </div>
    </section>
  )
}

export default Leftbar