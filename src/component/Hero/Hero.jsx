import React from 'react';
import './Hero.css';
import Header from '../header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

import {motion} from 'framer-motion';

function Hero() {

  const transition = {type: "spring",duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header />

            {/* The best ad section */}
            <div className='the-best-ad'>
              <motion.div
              initial={{left: mobile?"165px": "238px"}}
              whileInView={{left:"8px"}}
              transition={{...transition,type:"tween"}}
              >
              </motion.div>
              <span>The best fitness club for your health</span>
            </div>
            {/* Hero text section */}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape  </span>
                 <span>Your</span>
              </div>
              <div>
                <span>Ideal </span>
                <span>Body</span>
              </div> 
              <div>
                <span>
                  In here we will help you to build Your
                  strong body and give you a healthy and happy life
                  for your success.
                </span>
              </div>
            </div>

            {/* figure div */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter 
                  start={100} 
                  end={140} 
                  delay= '4'
                  preFix='+'/>
                </span>
                <span>expert fitness</span>
              </div>
              <div>
                <span> <NumberCounter 
                  start={900} 
                  end={954} 
                  delay= '4'
                  preFix='+'/></span>
                <span>members join </span>
              </div>
              <div>
                <span> <NumberCounter 
                  start={40} 
                  end={50} 
                  delay= '4'
                  preFix='+'/></span>
                <span>fitness programs</span>
              </div>
            </div>

            {/* Hero Button */}
            <div className="hero-buttons">
              <div className="btn">Get Started</div>
              <div className="btn">Learn More</div>
            </div>
        </div>
        <div className='right-h'>
          <button className="btn">
            Join Now
          </button>
          <motion.div 
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}

          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
          </motion.div>
          {/* Hero Images */}
          <img src={hero_image} className="hero-image" alt="" />
          <motion.img 
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src={hero_image_back} className="hero-image-back" alt="" />
          
          {/* calories */}
           <motion.div 
           initial={{right: "37rem"}}
           whileInView={{right: "28rem"}}
           transition={transition}
           className="calories">
              <img src={Calories} alt="" />
              <div>
                <span>burned calories</span>
                <span>220calories</span>
              </div>
           </motion.div>       
        </div>
    </div>
  )
}

export default Hero;