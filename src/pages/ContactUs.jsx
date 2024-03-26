import React from 'react'

const ContactUs = () => {    
    return (
        <div className='container-fluid'>
            <h2 className=' text-center p-2 mb-1 color-red text-3xl'>Contact Us</h2>
            <div className="row">
                <div className=" mt-2">
                    <div className=' text-center p-2 mb-1'>gm@gulshanmarwah.com</div>
                    <div className=' text-center p-2 mb-1'>+91 9810822688</div>
                    <div className=' text-center p-2 mb-1'>S-4, Pankaj Plaza, Plot No-7, Pocket -7,(Near Metro Station) Sector-12, Dwarka New Delhi-110078 (India)</div>
                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="450px" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of OxfordS-4, Pankaj Plaza, Plot No-7, Pocket -7,(Near Metro Station) Sector-12, Dwarka New Delhi-110078 (India)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs