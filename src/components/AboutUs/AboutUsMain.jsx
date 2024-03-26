import LayoutWraper from '@/src/layout/LayoutWraper'
import React from 'react'
import AboutUsBanner from './AboutUsCompo/AboutUsBanner'

import OurVision from './AboutUsCompo/OurVision'

const AboutUsMain = () => {
  return (
    <div>
            <AboutUsBanner/>
          <LayoutWraper>

           <OurVision/>
      </LayoutWraper>

    </div>
  )
}

export default AboutUsMain
