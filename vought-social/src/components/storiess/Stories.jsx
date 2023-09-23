import React from 'react'
import { story } from '../../constants'


const Stories = () => {
  return (
    <div className='flex sm:gap-[30px] gap-3 sm:h-[200px] h-[150px] sm:mb-[30px] mb-[15px] sm:w-[1000px] w-[355px] sm:m-auto overflow-x-auto px-3 sm:px-0 overflow-hidden stories'>
          <div className=' sm:min-w-[150px] min-w-[100px] sm:h-[200px] flex-1 rounded-[10px] overflow-hidden relative '>
              <img className='w-[100%] h-[100%] object-cover' src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' />
              <span className='absolute bottom-[30px] left-[10px] text-white font-semibold p-[2px] bg-[#5271ff] rounded-[50%] border-none cursor-pointer w-[30px] h-[30px] text-center text-[20px] flex justify-center items-center'>+</span>
              <span className='absolute bottom-[10px] left-[10px] text-white font-medium text-[0.7rem]'>King Vader</span>
          </div>
        {
            story.map(story=>(
                <div className='sm:min-w-[150px] min-w-[100px] sm:h-[200px] flex-1 rounded-[10px] overflow-hidden relative ' key={story.id}>
                    <img className='w-[100%] h-[100%] object-cover' src={story.img}/>
                    <span className='absolute bottom-[10px] left-[10px] text-white font-medium text-[0.7rem]'>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories;

