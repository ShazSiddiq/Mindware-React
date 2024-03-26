import React from 'react'
import HeroSection from '../components/homePageComp/HeroSection'
import RfidSolution from '../components/RFIDSolution/RfidSolution'
import Blogs from '../components/blogs/Blog'
import Faq from '../components/faq/Faq'
import Service from '../components/service/Service'
import OurVision from '../components/AboutUs/AboutUsCompo/OurVision'



const HomePage = () => {
    return (
        <div className=''>
            
            <HeroSection />
            <Service/>
            <OurVision/>
            <RfidSolution />
            <Blogs/>
            <Faq/>
            
        </div>
    )
}

export default HomePage