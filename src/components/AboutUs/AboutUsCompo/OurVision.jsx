import React from 'react'
import Reg1 from '../../../assets/Reg1.avif'
import LayoutWraper from '@/src/layout/LayoutWraper'
const OurVision = () => {
  return (
   
      <LayoutWraper>
       
        {/* <div className='w-[50%]'> */}
          <div className='flex flex-wrap py-10 p-2 lg:flex-nowrap gap-6'>
         
               <div className=''>
                <img src={Reg1} className=' h-96'/>
                </div>
          
          
            <div className='flex flex-col  justify-center items-start gap-4 w-[50%]'>
                <p className=' text-orange-500 text-xl'>About Us</p>
                <h1 className='text-3xl'>"RFID Revolution: Transforming Industries with Innovative Tracking and Automation"</h1>
                <p className='text-xl text-justify'>In an era defined by digital transformation and data-driven decision-making, Radio-Frequency Identification (RFID) has emerged as a transformative force across a myriad of industries. This unassuming yet powerful technology has redefined the way we track, manage, and optimize assets, inventory, and information, ushering in a new era of efficiency, accuracy, and automation</p>
            </div>
            </div>

        </LayoutWraper>
  
  )
}

export default OurVision
