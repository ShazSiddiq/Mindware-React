import React from 'react'
import { Button } from '@/components/ui/button';


const HeroSection = () => {


    return (
        <div className=''>
            
           <div className="relative overflow-hidden w-full ">
                <img src={'https://www.gulshanmarwah.com/wp-content/uploads/2023/09/Slider_img-1-1.jpeg'} className='w-[100%] h-[100vh] object-cover' />
                <div className="absolute flex justify-start items-center p-5 top-0 left-0 w-full h-full">

                    <div className=' flex flex-col gap-4 lg:w-1/2 lg:pl-32'>
                        <h1 className=' font-bold text-white text-5xl'>"Empowering Your Business with RFID Expertise"</h1>
                        <p className='text-white flex gap-2'>It suggests a focus on helping clients leverage RFID technology to enhance their operations and achieve their goals. You can further expand upon this introduction with a brief paragraph or two that provides more details about the consultant's services, experience, and the benefits they offer to clients.</p>
                       
                        <div className='flex gap-2'>
                        <Button className="border w-40 border-orange-500 bg-orange-500 text-white hover:bg-orange-700 rounded-3xl">Learn More</Button>
                        <Button className="border w-40 border-white bg-transparent text-white hover:bg-orange-700 rounded-3xl">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Carousel />
            <Features /> */}
        </div>
    )
}

export default HeroSection