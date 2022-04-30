import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './Styles/Slider.css'
import im2 from '../Recourses/im2.jpg'
import im3 from '../Recourses/im3.jpg'
import im4 from '../Recourses/im4.jpg'

const Slider = () => {
   const images = [
      im2, im3, im4
   ];

  return (
    <div className='slider'>

       <SimpleImageSlider
         width={'100%'}
         height={'80%'}
        images={images}
        className='slider__sec'
        slideDuration={0.7}
        autoPlay={true}
        navMargin = {20}
      />
    </div>
  )
}

export default Slider