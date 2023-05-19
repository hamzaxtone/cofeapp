//import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

// slick slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/components/slider/BannerSlider.module.scss';

// images static
import rightBanner from '../../../assets/images/Rightbanner.png';
import mobileAppStore from '../../../assets/images/MobileAppStore.png';
import iphoneAppStore from '../../../assets/images/IphoneAppStore.png';
import homeBanner from '../../../assets/images/cofebannermain.jpg';

// Data

var data = {
  "banners": [
    {
      "preHeading": "Your very own",
      "title": "Online Coffee Marketplace",
      "postHeading": "Download available",
      "link": "",
      "imageUrl": rightBanner,
      "imageOneLink": "",
      "imageOne": mobileAppStore,
      "imageTwo": iphoneAppStore,
      "imageTwoLink": ""
    },
    {
      "preHeading": "Your very own",
      "title": "Online Coffee Marketplace",
      "postHeading": "Download available",
      "link": "",
      "imageUrl": rightBanner,
      "imageOneLink": "",
      "imageOne": mobileAppStore,
      "imageTwo": iphoneAppStore,
      "imageTwoLink": ""
    },
    {
      "preHeading": "Your very own",
      "title": "Online Coffee Marketplace",
      "postHeading": "Download available",
      "link": "",
      "imageUrl": rightBanner,
      "imageOneLink": "",
      "imageOne": mobileAppStore,
      "imageTwo": iphoneAppStore,
      "imageTwoLink": ""
    }
  ]
};
import Link from 'next/link';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

};
const Carousel = () => {
  return (
    <div className='banner-slider-wrp mb-11 px-4'>
      {/* <div className='max-w-screen-xl mx-auto '>
        <div className='banner-slide'>
          <Slider {...settings}>
            {data.banners.map((banner, index) => {
              return (
                <div className='slider-item flex flex-wrap' key={banner.title}>
                  <div className='slider-left'>
                    <h3 className='text-white font-bold'>{banner.preHeading}</h3>
                    <h2 className='text-white font-extrabold'>{banner.title}</h2>
                    <span className='text-white font-semibold lg:mb-3.5 md:mb-1.5  block '>{banner.postHeading}</span>
                    <div className='flex items-center gap-x-2.5'>
                      <Link href={banner.imageOneLink}>
                        <Image src={banner.imageOne} alt={''} />
                      </Link>
                      <Link href={banner.imageTwoLink}>
                        <Image src={banner.imageTwo} alt={''} />
                      </Link>
                    </div>
                  </div>
                  <div className='slider-right'>
                    <Image src={banner.imageUrl} alt={''} />
                  </div>
                </div>
              )
            })
            }
          </Slider>
        </div>
      </div> */}
      <div className='max-w-screen-xl mx-auto'>
        <div className="banner-slider-inner">        
          <Slider {...settings}>
            <div className="banner-sslider">
              <Link className='' href="">
                <Image src={homeBanner} alt="" />
              </Link>
              </div>
              <div className="banner-slider">
              <Link className='' href="">
                <Image src={homeBanner} alt="" />
              </Link>
              </div>
          </Slider>
       </div>
       </div>
    </div>
  );
};

export default Carousel;
