import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/header/HeaderBottom.module.scss";
import Image from "next/image";
import useIsDevice from "@/hooks/is-device";
import MenuCloser from "./menu-closer";

// images
import moomilk from "../../assets/images/moomilk.png";
import twGrams from "../../assets/images/20Grams.png";
import kiaora from "../../assets/images/kiaora.png";
import jumo from "../../assets/images/Jumo.png";
import gloriaJeans from "../../assets/images/gloria-jeans.png";
import dunkin from "../../assets/images/dunkin.png";
import walls from "../../assets/images/walls.png";
import cbtl from "../../assets/images/CBTL.png";
import caribou from "../../assets/images/caribou.png";
import coffeBeans from "../../assets/images/coffee2x.png";
import bestDeal from "../../assets/images/best-deal.png";
import mblIcon from "../../assets/images/svg/menuback.svg";
import mblbestDeal from "../../assets/images/mblbestdeal.png";
import mblcoffeBeans from "../../assets/images/mblcoffebeans.png";
import Logo from "../../assets/Logo.svg";

var data = {
  categories: [
    {
      title: "Coffee",
      slug: "Coffee",
      link: "Coffee",
      imageUrl: "",
    },
    {
      title: "Capsules",
      slug: "Capsules",
      link: "Capsules",
      imageUrl: "",
    },
    {
      title: "Espresso Machine",
      slug: "Espresso Machine",
      link: "Espresso Machine",
      imageUrl: "",
    },
    {
      title: "Barista Tools",
      slug: "Barista Tools",
      link: "Barista Tools",
      imageUrl: "",
    },
    {
      title: "Grinders",
      slug: "Grinders",
      link: "Grinders",
      imageUrl: "",
    },
    {
      title: "Sweets",
      slug: "Sweets",
      link: "Sweets",
      imageUrl: "",
    },
    {
      title: "Brewing Tools",
      slug: "Brewing Tools",
      link: "Brewing Tools",
      imageUrl: "",
    },
    {
      title: "Bundles",
      slug: "Bundles",
      link: "Bundles",
      imageUrl: "",
    },
    {
      title: "Tea",
      slug: "Tea",
      link: "Tea",
      imageUrl: "",
    },
    {
      title: "Discounted Offers",
      slug: "Discounted Offers",
      link: "Discounted Offers",
      imageUrl: "",
    },
  ],
};

export default function HeaderBottom() {
  const [isHoveredUL, setIsHoveredUL] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isIPadMobileScreen = useIsDevice("ipad-mobile");
  const isMobileScreen = useIsDevice("mobile");
  const isIpadScreen = useIsDevice("ipad");
  const isDesktop = useIsDevice("desktop");

  const handleMenuHoverUL = () => {
    setIsHovered(!isHovered);
    console.log(isHovered);
  };
  const handleMenuHover = () => {
    setIsHovered(!isHovered);
    console.log(setIsHovered);
  };
  const handleLinkHover = () => {
    setIsHovered(false);
  };
  const [isOpen, updateIsOpen] = useState("");

  return (
    <div
      className={`${styles.headerBottomWrapper} header-bottom mb-10 lg:px-4`}
    >
      {isIPadMobileScreen && (
        <>
          <div
            className={`${styles.mblMenuHead} flex justify-between items-center px-3`}
          >
            <div className="menu-arrow-left"></div>
            <div className={styles.mblLogo}>
              <Link href="">
                <Image src={Logo} alt="" />
              </Link>
            </div>
            <div className="close-menu">
              <MenuCloser />
            </div>
          </div>
        </>
      )}
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="w-full  navbar" id="navbar-default">
            <ul
              className={`${styles.menuScroll} lg:flex relative flex-wrap md:w-full`}
            >
              {data.categories.map((category, index) => {
                const urlr = category.slug;
                const currentMenu = category.title;
                return (
                  <li
                    key={index}
                    className={`${styles.catItem} lg:block flex justify-between items-center`}
                    onMouseOver={() => updateIsOpen(currentMenu)}
                    onFocus={() => updateIsOpen("")}
                    onMouseLeave={() => updateIsOpen("")}
                    onBlur={() => updateIsOpen("")}
                  >
                    <Link
                      href={{
                        pathname: "/category",
                        query: { slug: urlr },
                      }}
                      className="block text-base"
                    >
                      {category.title}
                    </Link>
                    {isIPadMobileScreen && (
                      <>
                        <Image className="lg:hidden" src={mblIcon} alt="" />
                      </>
                    )}
                    {isOpen != "" && isOpen == currentMenu && (
                      <div
                        className={`${isOpen ? "active" : ""} ${
                          styles.subcategoryWrapper
                        } ${styles.menuScroll} w-full`}
                      >
                        <div className="flex flex-wrap">
                          <div className="lg:w-3/12 w-full">
                            <h6 className={styles.catHead}>{category.title}</h6>
                            <ul className={styles.subCatList}>
                              <li>
                                <Link href="#!">Blends</Link>
                              </li>
                              <li>
                                <Link href="#!">Specialty Coffee</Link>
                              </li>
                              <li>
                                <Link href="#!">Drip Bags</Link>
                              </li>
                            </ul>
                          </div>
                          <div
                            className={`${styles.shopByBrandsWrapper} lg:w-9/12 w-full `}
                          >
                            <div className="lg:w-12/12">
                              <h6 className={`${styles.shopByBrands} mb-5`}>
                                Shop By Brands
                              </h6>
                            </div>
                            <div className="flex flex-wrap ">
                              <div className="lg:w-6/12 w-full">
                                <div className="flex flex-wrap justify-between">
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={moomilk} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={twGrams} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={kiaora} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={jumo} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={gloriaJeans} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={dunkin} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={walls} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={cbtl} alt="" />
                                    </Link>
                                  </div>
                                  <div className="lg:w-2/6 w mb-4">
                                    <Link href="#!">
                                      <Image src={caribou} alt="" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="lg:w-6/12 w-full grid sm:grid-cols-2 lg:gap-12 gap-2 lg:px-6">
                                <Link href="#!">
                                  {isDesktop && (
                                    <Image
                                      src={coffeBeans}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                  {isIpadScreen && (
                                    <Image
                                      src={coffeBeans}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                  {isMobileScreen && (
                                    <Image
                                      src={mblcoffeBeans}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                </Link>

                                <Link href="#!">
                                  {isDesktop && (
                                    <Image
                                      src={bestDeal}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                  {isIpadScreen && (
                                    <Image
                                      src={bestDeal}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                  {isMobileScreen && (
                                    <Image
                                      src={mblbestDeal}
                                      alt=""
                                      className="w-full"
                                    ></Image>
                                  )}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
              {/* href={`/blog/${encodeURIComponent(post.slug)}`} */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
