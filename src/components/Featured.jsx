import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  
  const [isHovering,SetHovering] = useState(false)


  

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue Montreal"]'>Featured projects</h1>
            
        </div>
        <div className='px-20'>
          <div className="cards w-full flex gap-10 mt-10">
            
              <div onMouseEnter={()=>SetHovering(true)} onMouseLeave={()=>SetHovering(false)} className='cardcontainer relative w-1/2 h-[75vh]'>
                <h1 className='card absolute flex text-[#CDEA68] overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 left-full z-[9] text-8xl -mb-10 leading-none font-[Neue Montreal]'>
                {"FYDE".split("").map((item,index)=>(
                  <span className='inline-block' >{item}</span>
                ))} 
                </h1>
                <div className='card w-full h-full rounded-xl  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
              </div>
              <div className='cardcontainer relative w-1/2 h-[75vh]'>
              <div className='card w-full h-full rounded-xl  overflow-hidden'>
              <h1 className=' absolute  text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 right-full z-[9] text-8xl -mb-10 leading-none font-[Neue Montreal]'>
              {"VISE".split("").map((item,index)=>(
              <span>{item}</span>
              ))}
              </h1>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
              </div>
              
            </div>
        </div>
        
    </div>
  )
}

export default Featured