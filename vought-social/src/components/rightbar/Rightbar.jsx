import React from 'react'
import { drill,chigelu,ghost, ppic, vader,gojo1, gojo4, cover4, cat , onyedika, danny, shoes} from '../../assets'

const Rightbar = () => {
  return (
    <section className='flex-[3] right-bar  sticky left-bar overflow-y-scroll md:flex hidden dark:bg-[#222] dark:text-white'>
      <div className='b'>
        {/*First section*/}
        <div className='flex flex-col gap-5 right-first py-10 px-10 edit'>
          <span className='font-semibold text-gray-500 text-[12px]'>Suggestions for you</span>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={ppic}/>
              <p>onyekwelu jesse</p>
            </div>
            <div  className='flex gap-[10px] items-center'>
              <button className='bg-[#5271ff] text-white p-1 text-[12px]  border-none outline-none cursor-pointer'>follow</button>
              <button  className='bg-orange-600 text-white p-1 text-[12px] border-none outline-none cursor-pointer'>dismiss</button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={chigelu}/>
              <p>walter chigelu</p>
            </div>
            <div  className='flex gap-[10px] items-center'>
              <button  className='bg-[#5271ff] text-white p-1 text-[12px] border-none outline-none cursor-pointer'>follow</button>
              <button className='bg-orange-600 text-white p-1 text-[12px] border-none outline-none cursor-pointer'>dismiss</button>
            </div>
          </div>
        </div>

           {/* second section */}
        <div className='flex flex-col gap-5 right-first py-10 px-10 edit'>
        <span className='font-semibold text-gray-500 text-[12px]'>Latest Activities</span>
        <div className='flex items-center gap-20 '>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={ppic}/>
              <p>onyekwelu jesse</p>
            </div>
            <div  className='flex gap-[20px] items-center'>
              <p className='text-gray-500 text-[13px] font-medium'>changed their cover picture</p>
              <p className='text-gray-500 text-[11px]'>1 min ago</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={ppic}/>
              <p>onyekwelu jesse</p>
            </div>
            <div  className='flex gap-[20px] items-center'>
              <p className='text-gray-500 text-[13px] font-medium'>liked a post</p>
              <p className='text-gray-500 text-[11px]'>3 min ago</p>
            </div>
          </div>       <div className='flex items-center justify-between'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={cat}/>
              <p>striker</p>
            </div>
            <div  className='flex gap-[20px] items-center'>
              <p className='text-gray-500 text-[13px] font-medium'>liked a comment</p>
              <p className='text-gray-500 text-[11px]'>3 min ago</p>
            </div>
          </div>       <div className='flex items-center justify-between'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={cover4}/>
              <p>chekube precious</p>
            </div>
            <div  className='flex gap-[20px] items-center'>
              <p className='text-gray-500 text-[13px] font-medium'>posted</p>
              <p className='text-gray-500 text-[11px]'>5 min ago</p>
            </div>
          </div>
        </div>

        {/*third section for the right sidebar*/}
        <div className='flex flex-col gap-5 right-first py-10 px-10 edit'>
        <span className='font-semibold text-gray-500 text-[12px]'>Online</span>
        <div>
            <div className='flex gap-[10px] items-center relative'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={drill}/>
              <p>onyekwelu jesse</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={onyedika}/>
              <p>walter white</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={gojo4}/>
              <p>striker</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div> 
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={vader}/>
              <p>chekube precious</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={ghost}/>
              <p>pope precious</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={danny}/>
              <p>O danny</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={chigelu}/>
              <p>wendy chigelu</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={shoes}/>
              <p>Melisa</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[30px] rounded-full h-[30px] object-cover' src={cover4}/>
              <p>kamso obi</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
          <div className='flex items-center justify-between relative'>
            <div className='flex gap-[10px] items-center'>
              <img className='w-[20px] rounded-full h-[30px] object-cover' src={gojo1}/>
              <p>emmanuel nuel</p>
              <div className='w-[12px] h-[12px] rounded-[50%] bg-lime-400 absolute top-0 left-[20px]'/>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Rightbar