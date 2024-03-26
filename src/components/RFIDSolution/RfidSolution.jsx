import React from 'react'
import vdo from '../../assets/videoplayback.mp4'


const RfidSolution = () => {
    return (
        <div className=''>

            
            <div className="relative overflow-hidden w-full h-[60vh] max-h-96">
               
                <video src={vdo} autoPlay loop muted width={500} height={600} className='w-full h-full object-cover' />
                {/* <!-- Your content goes here --> */}
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-[#4a8aea] backdrop-brightness-75 flex flex-col items-center justify-center gap-10">
                    {/* <!-- Add your overlay content here --> */}
                    <h1 className="text-4xl text-center  font-bold text-white">We Offer RFID Solution & Services</h1>
                  <div className='lg:px-52 text-gray-100'>
                  <p>
                    <span className='font-bold text-black'>
                  Comprehensive RFID Systems:
                  </span>
                   We offer end-to-end RFID systems that cover everything from RFID tag selection to system integration. Our solutions are designed to streamline your processes and improve efficiency.
                  </p>
                  <p><span className='font-bold  text-black'>
                  Customized Solutions:
                  </span>
                   We understand that each business is unique. That's why we specialize in designing and implementing custom RFID solutions tailored to your specific needs and challenges.
                  </p>
                  </div>
                   
                </div>
                
            </div>
        </div >
    )
}

export default RfidSolution