import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
    <div className=" h-[100vh] bg-dimPurple flex items-center justify-center">
    <div className="flex flex-row-reverse bg-white w-[50%] rounded-[10px] min-h-[600px] overflow-hidden sm:flex hidden ">
        <div className="flex-1 first sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white">
            <h1 className="text-[100px] leading-[100px]">Vought Social.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ipsum harum ab est ducimus molestias voluptatibus ipsa aspernatur. Exercitationem quas consequuntur obcaecati ut optio itaque quos, ullam animi esse hic.</p>
            <span className='text-[14px]'>Don't you have an account?</span> <br />
            <Link to='/login'>
                <button className='bg-white text-purple-500 w-[50%] p-[10px] border-none outline-none cursor-pointer font-bold'>Login</button>
            </Link>
            
        </div>
        
        <div className="flex-1 sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white justify-center ">
            <p className="text-[100px] leading-[100px] text-gray-700">Register</p>
            <form className='flex flex-col gap-[30px]'>
                <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="text" placeholder="Username" name="username required"></input>
                <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="password" placeholder="Password" name="password required"></input>
                <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="email" placeholder="Email" name="email required"></input>
                <input className='border-b border-gray-300 py-5 px-10 outline-none text-black' type="text" placeholder="Name" name="password required"></input>
                <button type="submit" name="btnlogin" className='border-none p-5 bg-purple-400 font-bold cursor-pointer'>Register</button>
            </form>
        </div>
    </div>

    <div  className="flex  bg-white w-[80%] rounded-[10px] h-[500px] overflow-hidden sm:hidden ">
    <div className="flex-1 sm:p-[3em] p-[1em] flex flex-col sm:gap-[3em] gap-[1em] text-white justify-center ">
            <p className="text-[40px] leading-[100px] text-gray-700">Register</p>
            <form className='flex flex-col gap-[10px]'>
                <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="text" placeholder="Username" name="username required"></input>
                <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="password" placeholder="Password" name="password required"></input>
                <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="email" placeholder="Email" name="email required"></input>
                <input className='border-b border-gray-300 py-3 px-5 outline-none text-black' type="text" placeholder="Name" name="password required"></input>
                <div>
                    <Link to='/'>
                        <button type="submit" name="btnlogin" className='border-none p-3 bg-purple-400 font-bold cursor-pointer mt-5'>Login</button>
                    </Link>
                </div>

            </form>
        </div>
    </div>
</div>
  )
}

export default Register