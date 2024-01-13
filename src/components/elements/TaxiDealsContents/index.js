import React, { useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import { useWindowSize } from '../../../hooks/useWindowSize';
const TaxiDealsContents = (props) => {
        const { pageContent } = props;
        const size = useWindowSize();
        const { width } = size;
        // Set initial visibility based on window width
        const [isVisible, setIsVisible] = useState(width > 768);
        const handleScroll = () => {
                if (width < 768) setIsVisible(true);
        };
        useEffect(() => {
                // Update visibility based on initial window width
                setIsVisible(width > 768);
                // Add scroll event listener only if width is less than 768
                if (width < 768) window.addEventListener('scroll', handleScroll);
                // Clean up event listener
                return () => { if (width < 768) window.removeEventListener('scroll', handleScroll); };
        }, [width]);
        return (isVisible ? <div className={styles.description}>  <div dangerouslySetInnerHTML={{ __html: pageContent }}></div>    </div> : <></>);
};

export default TaxiDealsContents;
