import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="textstructure mt-52 px-20">
            {["We Create","Eye Opening","Presentation",].map((item,index)=>{
                return (
            <div className="masker ">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div initial={{width: 0}}
                             animate={{width:"8vw"}}
                             transition={{ease: [0.86, 0, 0.24, 1], duration:1}} className='w-[9vw] h-[4.5vw] rounded-md relative  -top-[.1vw] '><img src="https://i.ytimg.com/an_webp/AZXYSlxj0vU/mqdefault_6s.webp?du=3000&sqp=CJ7XmK4G&rs=AOn4CLAfUJvXO3ZDmemsq0AvQhmo8RIbUw" alt="" /></motion.div>
                        )}
                        <h1 className=" flex items-center uppercase text-[7vw] leading-[6vw] h-full tracking-tighter font-['Founders Grotesk'] font-medium ">
                            {item}
                        </h1>
                    </div>
            </div>
                );
            })}
        
            
        </div>  
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO" ].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                <div className='px-4 py-2 border-[2px] border-zinc-500 font-light text-lg rounded-full'>START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-300 font-light text-sm rounded-full'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                </span>
                </div>
            </div>
        </div>
    </div>
  )
}


export default LandingPage