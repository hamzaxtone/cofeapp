import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/header/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import HeaderTop from './header-top';
import HeaderBottom from './header-bottom';
import MobileMenu from './mobile-menu';
import MenuCloser from './menu-closer';
import useIsDevice from '@/hooks/is-device';
import GetLang from '@/hooks/getLang';

// images
import Logo from '../../assets/Logo.svg';
import productImageSearch from '../../assets/images/productimagesearch.png';

export default function Header() {
  const [inputValue, setInputValue] = useState('');
  const [searchActive, setSearchActive] = useState('');
  const isIPadMobileScreen = useIsDevice('ipad-mobile');
  const lang = GetLang();

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    document.body.classList.add(styles.searchActive);
  };
  const handleInputFocus = (e: any) => {
    setSearchActive("true");
    document.body.classList.add(styles.searchFocusOpen);

  };
  const handleInputBlur = (e: any) => {
    setSearchActive("false");
    document.body.classList.remove(styles.searchFocusOpen, styles.searchActive);
  };

  return (
    <div>
      <HeaderTop />
      <header className={` mt-2.5 mb-2.5 lg:mt-6 lg:mb-7 relative  ${styles.headerMiddle}`}>
        <div className={`px-4-  ${styles.headerMiddleInner}`}>
          <div className="container flex flex-wrap items-center justify-between mx-auto ">
            <div className={`flex flex-wrap items-center  ${styles.headerLeft }`}>
              <div className="lg:hidden flex items-center" >
                
                
                {isIPadMobileScreen &&
                  <>
                    <MenuCloser />
                  </>
                }
                <div className={`flex items-center w-5 relative ${styles.mobileIconSearch}`}>
                  <input
                    type="search"
                    value={inputValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    className=" w-5"
                  />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M7.29758 5.91153e-09C8.6579 -5.47358e-05 9.99116 0.380079 11.1469 1.0975C12.3026 1.81493 13.2349 2.84108 13.8384 4.06017C14.4418 5.27925 14.6926 6.64274 14.5623 7.99676C14.432 9.35078 13.9258 10.6414 13.1009 11.7231L17.7162 16.3401C17.8907 16.5152 17.992 16.7502 17.9995 16.9973C18.0071 17.2444 17.9203 17.4851 17.7568 17.6705C17.5933 17.8559 17.3653 17.9722 17.1192 17.9956C16.8731 18.0191 16.6273 17.9479 16.4317 17.7967L16.3403 17.716L11.7231 13.1009C10.8016 13.8035 9.72602 14.2766 8.58537 14.481C7.44473 14.6854 6.27181 14.6153 5.16366 14.2764C4.05551 13.9375 3.04399 13.3396 2.2128 12.5322C1.38161 11.7248 0.754657 10.731 0.383808 9.63318C0.012958 8.53535 -0.0911219 7.36499 0.0801802 6.21894C0.251482 5.07289 0.693241 3.98411 1.3689 3.04269C2.04457 2.10127 2.9347 1.33427 3.96567 0.805169C4.99663 0.276064 6.13877 6.11599e-05 7.29758 5.91153e-09ZM7.29758 1.94606C5.87819 1.94606 4.51692 2.5099 3.51326 3.51353C2.50959 4.51716 1.94574 5.87838 1.94574 7.29773C1.94574 8.71708 2.50959 10.0783 3.51326 11.0819C4.51692 12.0856 5.87819 12.6494 7.29758 12.6494C8.71698 12.6494 10.0782 12.0856 11.0819 11.0819C12.0856 10.0783 12.6494 8.71708 12.6494 7.29773C12.6494 5.87838 12.0856 4.51716 11.0819 3.51353C10.0782 2.5099 8.71698 1.94606 7.29758 1.94606Z" fill="#4D4D4D" />
                    </svg>
                  </span>


                </div>
                {/* {mobileMenu &&
               <div className={`${mobileMenu ? "active" : ""} ${styles.mobileMenu} w-full bg-white`}>
                   <div className="">
                      <MobileMenu />
                   </div>
               </div>
              }  */}
              </div>


              <Link href="/" className={`flex items-center ${lang == "en" ? "md:mr-9" : "md:ml-9"}  ${styles.logo}`}>
                <Image
                  src={Logo}
                  alt="CofeApp"
                  width={119}
                  height={48}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
              <div className={`lg:block hidden ${styles.searchWrp}`}>
                <div className='relative'>
                  <input
                    type="search"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder='Search Products, Brands and Categories...'
                    className={`rounded-full text-sm ${styles.searchBar}`}
                    value={inputValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                  />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58317 17.4998C13.9554 17.4998 17.4998 13.9554 17.4998 9.58317C17.4998 5.21092 13.9554 1.6665 9.58317 1.6665C5.21092 1.6665 1.6665 5.21092 1.6665 9.58317C1.6665 13.9554 5.21092 17.4998 9.58317 17.4998Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.3332 18.3332L16.6665 16.6665" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={` ${styles.searchPanelDropdown}`}>
                  <div className={`flex justify-between  mb-3.5 mt-6 ${styles.searchPannelTop}`}>
                    <h4 className={`text-lg font-semibold ${styles.searchTitle}`}>Products</h4>
                    <span className='text-sm font-semibold'>See all Results</span>
                  </div>
                  <div className={`${styles.searchScroll}`}>
                    <div className={`md:mb-5 mb-2  rounded-xl  ${styles.searchItem}`}>
                      <Link href="" className={`flex md:py-1 md:px-4`}>
                        <div className={`rounded-xl flex items-center ${styles.searchItemImage}`}>
                          <Image
                            src={productImageSearch}
                            alt="productImageSearch"
                          />
                        </div>
                        <div className='flex justify-between flex-1 flex-wrap w-100'>
                          <div className={`md:mt-3.5 ${styles.searchItemDesc}`}>
                            <p className='md:mb-1 md:text-lg md:text-base text-sm font-semibold'>Premium Arabic Coffee Grounds Saudi Blend</p>
                            <span className='md:text-base text-sm'>Saudicoffee</span>
                          </div>
                          <div className={`flex items-end ${styles.searchPrice}`}>
                            <span className='md:text-lg md:text-base text-sm font-bold md:font-semibold'>100.00 SAR</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className={`md:mb-5 mb-2 rounded-xl ${styles.searchItem}`}>
                      <Link href="" className={`flex md:py-1 md:px-4-`}>
                        <div className={`rounded-xl flex items-center ${styles.searchItemImage}`}>
                          <Image
                            src={productImageSearch}
                            alt="productImageSearch"
                          />
                        </div>
                        <div className='flex justify-between flex-1 flex-wrap w-100'>
                          <div className={`md:mt-3.5 ${styles.searchItemDesc}`}>
                            <p className='md:mb-1 md:text-lg md:text-base text-sm font-semibold'>Premium Arabic Coffee Grounds Saudi Blend</p>
                            <span className='md:text-base text-sm'>Saudicoffee</span>
                          </div>
                          <div className={`flex items-end ${styles.searchPrice}`}>
                            <span className='md:text-lg md:text-base text-sm font-bold md:font-semibold'>100.00 SAR</span>
                          </div>
                        </div>
                      </Link>  
                    </div>
                  </div>
                  <div className={`mt-5 md:mt-6 ${styles.searchCat}`}>
                    <h4 className={`text-lg md:mb-5 mb-5 md:pt-5 md:pt-3.5 font-semibold ${styles.searchTitle}`}>Search by Category</h4>
                    <div className={`md:flex flex-wrap  ${styles.searchCatBadge}`}>
                      <Link href="">
                        <span className={`md:text-base text-sm rounded-full py-2 px-4`}>Coffee Beans</span>
                      </Link>
                      <Link href="">
                        <span className={`md:text-base text-sm rounded-full py-2 px-4`}>Capsules</span>
                      </Link>
                      <Link href="">
                        <span className={`md:text-base text-sm rounded-full py-2 px-4`}>Grinders</span>
                      </Link>
                      <Link href="">
                        <span className={`md:text-base text-sm rounded-full py-2 px-4`}>Tea</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className={`flex flex-wrap items-center  ${styles.headerRight}`}>
              <Link href="" className='md:block hidden'>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18C9.86188 17.9996 9.7278 17.9535 9.61869 17.869C6.14313 15.175 3.74899 12.8551 2.07372 10.5663C-0.0641191 7.64152 -0.551698 4.9412 0.623491 2.54023C1.46113 0.825247 3.86776 -0.577919 6.68072 0.239036C8.02189 0.625523 9.19205 1.45436 10 2.59012C10.808 1.45436 11.9781 0.625523 13.3193 0.239036C16.126 -0.565446 18.5389 0.825247 19.3765 2.54023C20.5517 4.9412 20.0641 7.64152 17.9263 10.5663C16.251 12.8551 13.8569 15.175 10.3813 17.869C10.2722 17.9535 10.1381 17.9996 10 18ZM5.08046 1.25555C4.41113 1.22956 3.74735 1.38592 3.16036 1.70784C2.57338 2.02976 2.08535 2.50508 1.74867 3.08279C0.779767 5.06593 1.21734 7.27357 3.08639 9.82422C5.07269 12.3802 7.39859 14.6545 10 16.5844C12.601 14.6564 14.9269 12.3842 16.9136 9.83045C18.7889 7.27357 19.2202 5.06593 18.2513 3.08902C17.6262 1.84176 15.7509 0.850192 13.6631 1.4364C12.9936 1.63378 12.373 1.96881 11.8412 2.41991C11.3093 2.87102 10.8781 3.42822 10.5751 4.05565C10.528 4.17003 10.4479 4.26786 10.3449 4.33671C10.242 4.40556 10.1208 4.44232 9.99687 4.44232C9.87293 4.44232 9.75178 4.40556 9.64882 4.33671C9.54587 4.26786 9.46575 4.17003 9.41866 4.05565C9.11797 3.42665 8.68743 2.86815 8.15526 2.41676C7.62309 1.96537 7.0013 1.63129 6.33066 1.4364C5.92433 1.31866 5.50358 1.2578 5.08046 1.25555Z" fill="#4D4D4D" />
                </svg>
              </Link>
              <Link href="/login">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="">
                <span className={`${styles.cartHeader}`}>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6831 12.2813H5.1538L5.73268 11.0575L15.351 11.0395C15.6763 11.0395 15.9551 10.7983 16.0132 10.4647L17.3452 2.72621C17.38 2.52325 17.3278 2.31426 17.2 2.15551C17.1368 2.07738 17.0581 2.01445 16.9691 1.97108C16.8802 1.9277 16.7832 1.90493 16.685 1.90433L4.44907 1.86213L4.34453 1.35172C4.2787 1.02618 3.99603 0.789062 3.67465 0.789062H0.68343C0.502173 0.789063 0.32834 0.863797 0.200172 0.996826C0.0720041 1.12985 0 1.31028 0 1.49841C0 1.68654 0.0720041 1.86697 0.200172 2C0.32834 2.13302 0.502173 2.20776 0.68343 2.20776H3.12093L3.57784 4.4624L4.7027 10.1151L3.25452 12.5687C3.17932 12.674 3.13402 12.7991 3.12375 12.9298C3.11349 13.0605 3.13867 13.1916 3.19644 13.3082C3.3126 13.5473 3.54687 13.698 3.8063 13.698H5.02215C4.76294 14.0553 4.62294 14.4906 4.62332 14.9379C4.62332 16.0752 5.51391 16.9996 6.60972 16.9996C7.70553 16.9996 8.59612 16.0752 8.59612 14.9379C8.59612 14.4897 8.45285 14.0537 8.19729 13.698H11.3163C11.0571 14.0553 10.9171 14.4906 10.9175 14.9379C10.9175 16.0752 11.808 16.9996 12.9039 16.9996C13.9997 16.9996 14.8903 16.0752 14.8903 14.9379C14.8903 14.4897 14.747 14.0537 14.4914 13.698H16.685C17.0606 13.698 17.3684 13.3805 17.3684 12.9887C17.3673 12.8007 17.2946 12.6209 17.1662 12.4884C17.0378 12.3558 16.8641 12.2814 16.6831 12.2813ZM4.73367 3.26073L15.8815 3.29891L14.7896 9.64487L6.03277 9.66094L4.73367 3.26073ZM6.60972 15.5729C6.27284 15.5729 5.99792 15.2875 5.99792 14.9379C5.99792 14.5882 6.27284 14.3029 6.60972 14.3029C6.94659 14.3029 7.22152 14.5882 7.22152 14.9379C7.22152 15.1063 7.15706 15.2678 7.04232 15.3869C6.92759 15.506 6.77198 15.5729 6.60972 15.5729ZM12.9039 15.5729C12.567 15.5729 12.2921 15.2875 12.2921 14.9379C12.2921 14.5882 12.567 14.3029 12.9039 14.3029C13.2407 14.3029 13.5157 14.5882 13.5157 14.9379C13.5157 15.1063 13.4512 15.2678 13.3365 15.3869C13.2217 15.506 13.0661 15.5729 12.9039 15.5729Z" fill="black" />
                  </svg>
                  <span className={`rounded-full ${styles.badge}`}>2</span>

                </span>
              </Link>
              <div className={`hidden ${styles.closeSearchIcon}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z" stroke="#7A7A7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.7549 22.2449L22.2449 13.7549" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22.2449 22.2449L13.7549 13.7549" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>


              </div>

            </div>
          </div>
        </div>
      </header>
      <HeaderBottom />
    </div>
  )
}
