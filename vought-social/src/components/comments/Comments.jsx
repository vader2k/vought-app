import { comments } from "../../constants"

const Comments = () => {
  return (
    <div className="">
        <div className="my-[30px] flex items-cente justify-between gap-[20px]">
            <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <input type="text" placeholder="write a comment" className="outline-none border border-gray-300 px-2 flex-[5] bg-transparent "></input>
            <button className="border-none bg-[#5271ff] text-white p-[10px] cursor-pointer rounded-[3px]">send</button>
        </div>
        {comments.map((comment)=>(
            <div className="my-[30px] flex justify-between gap-[20px]">
                <img src={comment.profilePicture} className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
                <div className="info flex flex-col gap-3">
                    <span className="font-medium ">{comment.name}</span>
                    <p className="sm:max-w-[650px] max-w-[250px] sm:text-[1.2rem] text-[0.9rem] underline">{comment.desc}</p>
                </div>
                <span className="text-[13px] text-gray-500 flex-1 self-center">1 hour ago </span>
            </div>
        ))}
    </div>
  )
}

export default Comments