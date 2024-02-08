import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue Montreal"]'>Featured projects</h1>
            
        </div>
        <div className='px-20'>
          <div className="cards w-full flex gap-10 mt-10">
              <div className='cardcontainer w-1/2 h-[75vh] '>
                <div className='card w-full h-full rounded-xl  overflow-hidden'>
                  <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
              </div>
              <div className='cardcontainer w-1/2 h-[75vh] overflow-hidden'>
                <div className='card w-full h-full rounded-xl '></div>
              </div>
              
            </div>
        </div>
        
    </div>
  )
}

export default Featured