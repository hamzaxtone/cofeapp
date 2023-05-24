import React , { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import Link from 'next/link'
import styles from '../../styles/components/footer/Footer.module.scss';
import Icon from '@/components/common/icons/icomoon';

// links
import Twitter from '../../assets/images/svg/twitter.svg'
import Facebook from '../../assets/images/svg/facebook.svg'
import Youtube from '../../assets/images/svg/youtube.svg'
import Linkedin from '../../assets/images/svg/linkedin.svg'
import Instagram from '../../assets/images/svg/instagram.svg'
// images
import footerImg from '../../assets/images/footerimg.png';
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import qrcode from '../../assets/images/qrcode.png';
import footerMbl from '../../assets/images/footermblimg.png';

export default function Footer() {
	
{/* Conditional Rendering */}
	// const [mobile, setMobile] = useState(() => {
	// 	if (typeof window === 'undefined') return false
	// 	return window.innerWidth < 576
	// });
  	// useEffect(() => {
    // 	const updateMobile = () => {
    //   		setMobile(window.innerWidth < 767 ? true : false);
    // 	}
	// 	updateMobile()
	// 		window.addEventListener('resize', updateMobile)
	// 	return () => {
	// 		window.removeEventListener('resize', updateMobile)
	// 	}
  	// }, [])
{/* Conditional Rendering */}

	return (
		<div className={`${styles.footerWrapper} lg:pt-[65px] lg:pb-[15px] py-[32px] px-[16px]`}>

			{/* { typeof mobile !== 'undefined' ? (
				mobile ? (
					<div className='mobile'></div>
				) : (
					<div className='desktop'></div>
				)
			) : null
			} */}

			<div className="max-w-screen-xl mx-auto">
				<div className={`${styles.footerTopSec}  flex lg:flex-row flex-col  justify-center items-center lg:mb-[65px] mb-[30px] lg:py-[60px] lg:px-[70px] pt-[40px] rounded-[20px]`}>
					<Image src={footerImg} alt={''} className='md:flex-2 lg:order-1 order-2 lg:block hidden'/>
					<Image src={footerMbl} alt={''} className='md:flex-2 lg:order-1 order-2 lg:hidden block'/>
					<div className="lg:flex flex-col lg:justify-start justify-center lg:items-left md:order-1 lg:mb-0 mb-10">
						<div className={`flex ${styles.revolutionSec} flex-wrap lg:justify-start justify-center lg:mb-[0] mb-[20px]`} >
							<h6 className="flex lg:text-[47px] md:text-[35px] text-[25px] font-bold md:px-[10px] px-[5px]">Join The </h6>
							<Image src={logo}
								alt="logo-coffe"
								className={`${styles.footerlogoImg} flex `} />
							<h6 className="flex lg:text-[47px] md:text-[35px] text-[25px] font-bold md:px-[10px] px-[5px]">Revolution</h6>
						</div>
						<div className="flex items-center flex-wrap lg:justify-start justify-center">
							<Link href="" className={`${styles.appStore}`}>
								<Image src={appstore} alt={''} />
							</Link>
							<Link href="" className={`${styles.appStore}`}>
								<Image src={playstore} alt={''} />
							</Link>
							<Link href="" className={`${styles.appStore} ${styles.qrCode} bg-white`}>
								<Image src={qrcode} alt={''} />
							</Link>
							<div className={`${styles.becomePartner} lg:block hidden items-center` }>
								<Link href="" className='btn btn-lg inline-flex items-center btn-primary rounded-md justify-center'>
									Become A Partner
								</Link>
							</div>
						</div>
							{/* on mobile  */}
							<div className={`${styles.becomePartner} lg:hidden flex justify-center flex-col items-center`}>
								<span>or</span>
								<Link href="" className='btn btn-lg inline-flex items-center btn-primary rounded-md justify-center'>
									Become A Partner
								</Link>
							</div>
							{/* on mobile */}
					</div>
				</div>
				<div className={`${styles.footerBottomWrapper} md:order-first`}>
					<div className="lg:flex md:items-center lg:justify-between">
						<div className={`${styles.leftSec} lg:flex  gap-4 grid-cols-2 grid-rows-3 grid`}>
							<Link href="">
								About Us
							</Link>
							<Link href="">
								News
							</Link>
							<Link href="">
								Careers
							</Link>
							<Link href="">
								Features
							</Link>
							<Link href="">
								Help Center
							</Link>
							<Link href="">
								Contact
							</Link>
						</div>
						<div className={`${styles.rightSec}  flex items-center justify-between lg:py-[0] py-[40px]`}>
							<div className="lg:hidden">
                               <Link href="" className=''>
								<Image src={logo}
									alt="logo-coffe"
									className={`${styles.footerBottomlogoImg} flex `} />
							   </Link> 
							</div>
							<div className={`${styles.socialLinks} flex`}>
							<span>
								Follow Us:
							</span>
							<Link href="">
								<Icon icon="icon-twitter" />
							</Link>
							<Link href="">
								<Icon icon="icon-facebook" />
							</Link>
							<Link href="">
								<Icon icon="icon-instagram" />
								
							</Link>
							<Link href="">
								<Icon icon="icon-linkedin" />
							</Link>
							<Link href="">
								<Icon icon="icon-youtube" />
							</Link>
							</div>
						</div>
					</div>
					<div className={`${styles.copyrightsSec} lg:pt-[20px]`}>
						<div className="flex md:justify-between items-center justify-center md:flex-row flex-col ">
							<p className='md:order-1 order-2'>COFE App © 2023 All rights reserved.</p>
							<div className="md:order-2 order-1 lg:mb-[0] mb-[15px]">
								<Link href="">
									Terms & Conditions
								</Link>
								<span className='md:px-3 px-2'>|</span>
								<Link href="">
									Privacy Policy
								</Link>
								<span className='md:px-3 px-2'>|</span>
								<Link href="">
									Cookies Policy
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
