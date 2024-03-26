import React from 'react'
import LayoutWraper from '@/src/layout/LayoutWraper'
const FooterHeader = () => {
  return (
  
    <div className="py-10 border-t border-b border-gray-300 ">
      <div className='grid grid-cols-1 justify-between items-center gap-5 md:grid-cols-2 lg:grid-cols-2 sm:justify-center'>
        <div className='flex gap-3 justify-center lg:flex-nowrap lg:flex-col flex-wrap lg:w-full'>
        <div>
          <h3 className=' text-xl font-bold'>Subscribe to our newsletter</h3>
          </div>
        
        
        </div>

        <div className='justify-self-end'>
          <div className='flex gap-3 justify-center lg:flex-nowrap flex-wrap lg:w-full'>
           
            <div className='w-full'>
            <input type="email" name="" id="" className='p-2  border-2 border-gray-400 rounded-full w-96 border-opacity-75 md:border-opacity-50 placeholder-black' placeholder='Enter your email' />
            </div>

           <div>
           <button type="button" className="inline-flex items-center lg:w-full justify-center px-8 w-full py-2 rounded-full bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" placeholder='Enter your email'>
              Subscribe
            </button>
           </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default FooterHeader