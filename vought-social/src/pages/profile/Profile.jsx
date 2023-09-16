import {AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaMap, FaGlobe} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import {cover1, onyedika} from '../../assets'
import {Post} from '../../components'

const Profile = () => {
  return (
    <div>
      <div className='flex items-center justify-center flex-col relative w-[100%] overflow-hidden'>
        <img src={cover1} className='sm:h-[400px] object-fill w-[100%]'/>
        <img src={onyedika} className='sm:w-[200px] w-[100px] sm:h-[200px] h-[100px] object-cover rounded-full absolute sm:top-[300px] top-[250px]'/>
        <p className='sm:mt-[100px] mt-[60px] font-semibold sm:text-[1.5rem] text-[1rem]'>Onyedika Chigelu</p>
      </div>

      <div className='sm:py-[20px] sm:px-[70px] py-[10px] px-[20px]'>
        <div className='flex items-center justify-evenly mt-[20px] gap-14 shadow py-5 px-5 mr-3 sm:mr-0'>
            <div className='flex-1 gap-3 items-center justify-center sm:flex hidden'>
              <FaFacebook className='sm:text-[25px]  text-gray-600'/> <FaInstagram  className='text-[25px] text-gray-600'/> <AiOutlineTwitter className='text-[25px] text-gray-600'/> <FaLinkedin  className='text-[25px] text-gray-600'/> <FaPinterest  className='text-[25px] text-gray-600'/>
            </div>
            <div className='flex flex-1 gap-8 items-center justify-center'>
              <div className='flex items-center justify-center gap-4'>
                <FaMap className='text-gray-600'/> <span>USA</span>
              </div>
              <div className='flex items-center justify-center gap-4'>
                <FaGlobe className=' text-gray-600'/> <span>lama.dev</span>
              </div>
            </div>
            <div className='flex flex-1 gap-5 items-center justify-center'>
              <AiOutlineMail/> <BsThreeDots/>
            </div>
        </div>
          <div className='bg-[#5271ff] text-white p-3 text-[12px] border-none outline-none cursor-pointer w-[80px] text-center m-auto mt-6'>Follow</div>
         <Post/>
      </div>
    </div>
  )
}

export default Profile