import React from 'react'
import LayoutWraper from '@/src/layout/LayoutWraper'
import FooterHeader from './footerComponent/FooterHeader'
import FooterMiddle from './footerComponent/FooterMiddle'
import FooterEnd from './footerComponent/FooterEnd'

const Footer = () => {
    return (
        <LayoutWraper>
            <FooterHeader />
            <FooterMiddle />
            <FooterEnd />
        </LayoutWraper>
    )
}

export default Footer