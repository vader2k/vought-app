import { Link } from 'react-router-dom'
import './login.css'


const Login = () => {
    
  return (
    <div className=" h-[100vh] bg-dimPurple flex items-center justify-center">
        <div className=" bg-white w-[50%] rounded-[10px] min-h-[600px] overflow-hidden sm:flex hidden ">
            <div className="flex-1 left sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white">
                <h1 className="text-[100px] leading-[100px]">Hello World.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsum harum ab est ducimus molestias voluptatibus ipsa aspernatur. Exercitationem quas consequuntur obcaecati ut optio itaque quos, ullam animi esse hic.</p>
                <span className='text-[14px]'>Don't you have an account?</span> <br />
                <Link to='/register'>
                    <button className='bg-white text-purple-500 w-[50%] p-[10px] border-none outline-none cursor-pointer font-bold'>Register</button>
                </Link>
               
            </div>
            
            <div className="flex-1 sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white justify-center ">
                <p className="text-[100px] leading-[100px] text-gray-700">Login</p>
                <form className='flex flex-col gap-[30px]'>
                    <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="text" placeholder="username" name="username required"></input>
                    <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="password" placeholder="password" name="password required"></input>
                    <Link to='/'>
                    <button type="submit" name="btnlogin" className='border-none p-5 bg-purple-400 font-bold cursor-pointer w-[100%]'>Login</button>
                    </Link>
                </form>
            </div>
        </div>

        <div className=" bg-white w-[80%] rounded-[10px] h-[500px] sm:hidden flex">
            <div className="flex-1 sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white justify-center ">
                    <p className='text-blue-900 font-bold'>Vought Socials</p>
                    <p className="text-[40px] leading-[100px] text-gray-700">Login</p>
                    <form className='flex flex-col gap-[30px]'>
                        <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="text" placeholder="username" name="username required"></input>
                        <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="password" placeholder="password" name="password required"></input>
                        <div className='flex items-center gap-10'>
                            <Link to='/'>
                            <button type="submit" name="btnlogin" className='border-none p-3 bg-purple-400 font-bold cursor-pointer w-[100%] mt-5'>Login</button>
                            </Link>

                            <Link to='/register'>
                            <button type="submit" name="btnlogin" className=' p-3 text-black border-[2px] border-purple-400 font-bold cursor-pointer w-[100%] mt-5'>Register</button>
                            </Link>
                        </div>

                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login