import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/imag/image 1.png';
import img2 from '../../assets/imag/image 100.png';
import img3 from '../../assets/imag/image 101.png';
import img4 from '../../assets/imag/image 3.png';
import img5 from '../../assets/imag/image 4.png';
import img6 from '../../assets/imag/image 7.png';
const Slick = () => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
        <div className='bg-[#FCF8F3]'>
            <div className="flex items-center gap-[42px] justify-center py-[44px]">
                <div className="w-[522px] pl-[100px]">
                    <h2 className="text-[#3A3A3A] text-[40px] font-bold leading-[48px]">50+ Beautiful rooms inspiration</h2>
                    <p className="mt-[7px] w-[368px] text-[16px] text-[#616161] font-normal leading-[24px]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className="mt-[24px] bg-[#B88E2F] w-[176px] h-[48px] text-white text-[16px] font-semibold px-[36px] py-[12px]  hover:border-[1px] hover:border-[#B88E2F] hover:bg-[#FCF8F3] hover:text-[#B88E2F] transition-colors duration-700">Explore More</button>
                </div>
                 <div className="w-[680px]">
      <Slider {...settings}>
        <div className="p-4">
          <img
            src={img1}
            alt="Room 1"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <img
            src={img2}
            alt="Room 2"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <img
            src={img4}
            alt="Room 3"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <img
            src={img3}
            alt="Room 4"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <img
            src={img5}
            alt="Room 5"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <img
            src={img2}
            alt="Room 6"
            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Slider>
    </div>
                </div>
            </div>
       
    );
};

export default Slick;