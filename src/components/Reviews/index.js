import React from 'react'
import Slider from "react-slick";
import Heading from '../Heading';
import img1 from './assets/photo1.jpg'
import img5 from './assets/photo5.png'
import img6 from './assets/photo6.png'
import img10 from './assets/photo10.png'
import img11 from './assets/photo11.png'
import img12 from './assets/photo12.png'
import img14 from './assets/photo14.png'
import img16 from './assets/photo16.png'
import video1 from './assets/video1.mp4'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='h-10 w-10 bg-[#EE8323] rounded-full cursor-pointer absolute left-[101%] top-1/2 flex justify-center items-center'
      // style={{ ...style, display: "block", background: "", left: `97%` }}
      onClick={onClick}
    >
      <KeyboardArrowRightIcon className='text-white' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='h-10 w-10 bg-[#EE8323] rounded-full cursor-pointer absolute right-[101%] top-1/2 flex justify-center items-center'
      // style={{ ...style, display: "block", background: "", }}
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon className='text-white'  />

    </div>
  );
}

const Reviews = () => {

    const photoesObj = [img1,img5,img6,img10,img11,img12,img14]

    var settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <div className='container mx-auto p-4'>
        <Heading>Отзывы от наших клиентов</Heading>
        <Slider {...settings} className='mt-[40px]'>
          {photoesObj.map((item) =>
            <img src={item} alt="screenshot"  className="object-cover  h-[600px] bg-black rounded-xl overflow-hidden flex justify-center"/>
          )}
          {/* <video src={video1} alt="screenshot"  className="object-cover  h-[600px] bg-black rounded-xl overflow-hidden flex justify-center"/> */}
        </Slider>
        
        {/* <video src={video1} type="video/mp4"  className="object-cover  h-[600px] bg-black rounded-xl overflow-hidden flex justify-center"/> */}
      </div>
  )
}

export default Reviews