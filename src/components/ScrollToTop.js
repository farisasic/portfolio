import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollToTop = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    });

    return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 45, display: showScroll ? 'flex' : 'none' }} />
    );


}

export default ScrollToTop;