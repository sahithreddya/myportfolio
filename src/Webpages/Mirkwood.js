import React from 'react';
import './Styles/Mirkwood.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Mirkwood = React.forwardRef((props, ref) => {

    // let location = useLocation();

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <div className='mirkwood-container'>
            <HeaderBar />
            <div className='mirkwood-content'>
                <div>
                    <div>
                        <div className='colorBarHorizontal' style={{ backgroundColor: "#7FE2DC" }} />
                        <div className='colorBarHorizontal' style={{ backgroundColor: "#664771" }} />
                    </div>
                    <p className='mirkwood-title'>404</p>
                    <p className='mirkwood-subtitle'>Looks like you're lost.</p>
                    <Link to="/" style={{ textDecorationStyle: "dotted", textDecorationColor: "#664771" }}>
                        <p className='mirkwood-home'>{`>>`} HOME {`<<`}</p>
                    </Link>
                    <div>
                        <div className='colorBarHorizontal' />
                        <div className='colorBarHorizontal' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
});
export default Mirkwood;