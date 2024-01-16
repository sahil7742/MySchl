"use client"
import Link from "next/link"
const Alert =()=>{

    const handleClick =()=>{
       alert("Rank Card prepared")
      }

return(
    <div className="flex flex-1 py-1 justify-center items-center ">
    <button type="submit" onClick={handleClick}  className="bg-lime-900 text-white px-1 py-1 rounded-2xl w-20 font-mono hover:bg-red-400"><Link href="/rank">Submit</Link></button>
    </div> 
)
}
export default Alert;