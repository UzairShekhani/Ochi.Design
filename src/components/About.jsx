import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] tracking-tight leading-[4.5vw]'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that needs
             to raise funds,brsell prod­ucts, ex­plain com­plex ideas, and hire great  peo­ple.
        </h1>
        <div className='w-full flex gap-5  border-t-[1px] pt-10 border-[#a1b562] mt-20'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='flex uppercase gap-10 item-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white'>Read More
                <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
        </div>
    </div>
  )
}

export default About