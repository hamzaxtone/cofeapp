	import { MyPage } from '@/components/layouts/types';
	import Head from 'next/head';
	import ProductCard from '../../components/product/product-card';
	import { Fragment } from 'react'
	import { Menu, Transition } from '@headlessui/react'
	import { ChevronDownIcon } from '@heroicons/react/20/solid'
	import React, { useState, useEffect }  from 'react';
	import { useRouter } from "next/router";
	import Image from 'next/image';

	import styles from '../../styles/Category/Category.module.scss';

	// images
	import productImg1 from '../../assets/images/coffeGrounds.png';
	import productImg2 from '../../assets/images/blended.png';
	import productImg3 from '../../assets/images/espresso.png';
	import productImg4 from '../../assets/images/supremo.png';
	import Link from 'next/link';
	import Pagination from '@/components/common/pagination/pagination';
	import PillItem from '@/components/common/pills/PillItem';
	import RadioItem from '@/components/common/radio/Radio-Item';
	import Logo from '../../assets/images/svg/Logo.svg';

	import MultiRangeSlider from "@/components/common/form/multiRangeSlider";

	

	var data = {
		"products": [
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg1,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg2,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg3,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg4,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg1,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg2,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg3,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg4,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg1,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg2,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg3,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},
			{
				"title": "Premium Arabic Coffee Grounds Saudi Blend",
				"prdCat": "Saudicoffee",
				"link": "https://twitter.com/kendalmintcode",
				"imageUrl": productImg4,
				"priceTag": "SAR 200.00",
				"discountedPriceTag": "SAR 80000.00"
			},


		],
		"taxonomies": [
			{
				"title": "Category",
				"slug": "category",
				"parentCategories": [
					{
						"title": "Coffee",
						"slug": "coffee",
						"childCategories": [
							{
								"title": "Blends",
								"slug": "blends",
							},
							{
								"title": "Specialty Coffee",
								"slug": "specialty-coffee"
							},
							{
								"title": "Drip Bags",
								"slug": "drip-bags"
							}
						]
					},
					{
						"title": "Capsules",
						"slug": "capsules",
						"childCategories": [
							{
								"title": "Blends",
								"slug": "blends"
							}

						]
					}
				]
			},
		]
	};

	

	const Category: MyPage = () => {
		const router = useRouter();
  	const { slug } = router.query;

	  const [rangeMinvalue, rangeMinsetValue] = React.useState(0);
	  const [rangeMaxvalue, rangeMaxsetValue] = React.useState(0);
  const handleChange = (event:any) => {
    rangeMaxsetValue(event[1]);
	rangeMinsetValue(event[0]);
	//console.log(event[0]);
  };


  const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e:any) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
	console.log(e.maxValue);
};

const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);

  useEffect(() => {
    if (isBodyClassAdded) {
      document.body.classList.add(styles.sidebarListingOpen);
    } else {
      document.body.classList.remove(styles.sidebarListingOpen);
    }
  }, [isBodyClassAdded]);

  const handleButtonClick = () => {
    setIsBodyClassAdded(true);
  };

  const handleCloseClick = () => {
    setIsBodyClassAdded(false);
  };

		return (
		<> 
			<Head>
				<title>Cofeapp | Category</title>
			</Head>
			<main className='px-4'>
				<>
				<div className="max-w-screen-xl category-page-sec mx-auto flex flex-wrap">
					<div className='w-100 mb-5'>
						<nav aria-label="breadcrumb">
							<ol className="flex flex-wrap items-center breadCrumb ">
								<li className="breadcrumbItem">
									<Link href="/" className='text-sm'>Homepage</Link>
								</li>
								<li className="breadcrumbItem">
									<Link href="" className='text-sm'>Category</Link>
								</li>
								<li className="breadcrumbItem">
									<Link href="" className='text-sm'>Coffee</Link>
								</li>
							</ol>
						</nav>
						<div className={`cursor-pointer text-center rounded-lg md:hidden pb-1.5 pt-1.5  my-5 px-5 ${styles.filterOnMobile}`} onClick={handleButtonClick}>
							<Link href="#" className='text-sm'>Filter (3)</Link>
						</div>
					</div>
					<div className={`w-full md:w-2/6 lg:w-1/4 ${styles.categoryListingLeft}`}>
						<div className={`flex justify-between items-center md:hidden ${styles.sidebarTopListing}`}>
							<Link href="/" className={`flex items-center  md:mr-9 ${styles.logo}`}>
								<Image
								src={Logo}
								alt="CofeApp"
								/>
							</Link>
							<Link href="#" className={`${styles.closeSidebar}`} onClick={handleCloseClick}>X</Link>
						</div>
						<div className={`md:hidden   ${styles.mobileFilterWrp}`}>
							<div className={`${styles.sortingMobile}`}>
								<h3 className={`text-2xl font-semibold mb-10  ${styles.filterTitle}`}>Sorting</h3>
								<RadioItem />
							</div>
							<div className={`flex items-center justify-between mb-5 pt-2`}>
								<h3 className={`text-2xl font-semibold   ${styles.filterTitle}`}>Filters</h3>
								<button className={`font-medium ${styles.clearBtn} `}>
								   Clear All
								</button>
							</div>
							<div className="flex flex-wrap items-center">
								<PillItem />
								<PillItem />
								<PillItem />
							</div>
								
						</div>
						<div className={`w-full ${styles.taxonomiesList}`}>
						{data.taxonomies.map((taxonomy, index) => {
							return (
								<div key={taxonomy.title} className={`${styles.taxonomyItem} ${styles.taxonomyItemActive}`}>
									<h4 className={`text-2xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>{taxonomy.title} 
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M15.2837 0.833179C15.685 1.25521 15.685 1.91773 15.2837 2.33976L8 10L0.716265 2.33976C0.314979 1.91773 0.314979 1.25521 0.716265 0.833179C1.14719 0.379975 1.86979 0.379975 2.30072 0.833179L8 6.82706L13.6993 0.83318C14.1302 0.379976 14.8528 0.379975 15.2837 0.833179Z" fill="#212121"/>
									</svg>
									</h4>
									<ul className={`${styles.taxonomyParentItems}`}>
									{taxonomy.parentCategories.map((taxonomyParent, index2) => {
										return (
											<li key={taxonomyParent.title} className={`${styles.taxonomyParentChildren}`}>
												<span className={`text-xl mt-3.5 mb-3.5 block ${styles.taxonomyParentTitle}`}>{taxonomyParent.title}</span>
												<ul className={`${styles.taxonomyItemsInner}`}>
													{taxonomyParent.childCategories.map((childCategory, index3) => {
														return ( 
															<li key={childCategory.title}>
															<label className='flex items-center custom-checkbox1 mb-2.5'>
																<input type="checkbox" name={taxonomy.slug} />
																<span className='checkbox-custom flex items-center justify-center'>
																	<svg width="10" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path fillRule="evenodd" clipRule="evenodd" d="M10.1313 0L4.14556 5.67979L1.85151 3.54347L0.666687 4.71957L4.11022 8H4.12501L11.3334 1.15211L10.1313 0Z" fill="white"/>
																	</svg>
																</span>
																<span className='text-base'>{childCategory.title}</span>
															</label>
															</li> 
														)
													})}
												</ul>
											</li>
										)
									})}
									</ul>
								</div>
							)
						})}
						</div>
						<div className="Price mb-3">
							{/* <div className="rangeVal">
								<span id='min-val-range' className="font-bold text-2xl  border-2 border-black">
									{rangeMinvalue}
								</span>
								<span id='max-val-range' className="max-val-range font-bold text-2xl  border-2 border-black">
									{rangeMaxvalue}
								</span>
							</div> */}
							{/* <RangeSlider 
								defaultValue={[30, 70]} 
								min="0" max="100" 
								onInput={handleChange} /> */}
								<div className={`flex justify-between gap-x-6 mb-6 ${styles.rangeValueBx}`}>
									<span className={`text-base rounded-xl ${styles.rangeValueInner}`}><span>SAR</span>{minValue}</span>
									<span className={`text-base rounded-xl ${styles.rangeValueInner}`}><span>SAR</span>{maxValue}</span>
								</div>
								<MultiRangeSlider
									min={0}
									max={1000}
									onChange={({ min, max }: { min: number; max: number }) =>
										console.log(`min = ${min}, max = ${max}`)
									}
								/>
								
						</div>
					</div>
					<div className={`w-full md:w-4/6 lg:w-9/12 ${styles.categorylistingRight}`}>
						<div className={`hidden md:grid grid-cols-2 mb-7 mt-2 ${styles.categoryFilterWrp}`}>
							<div className={`${styles.categoryFilterLeft}`}>
								<h3 className='text-3xl font-semibold'>{slug} <span className='text-base ml-4 font-medium'>( 7 items )</span></h3>
							</div>
							<div className={`flex items-center justify-end ${styles.categoryFilterRight}`}>
															<span className='text-sm'>Sort by</span>
															
								<Menu as="div" className="relative inline-block text-left ml-2 custom-dropdown2 ">
									<Menu.Button className="flex items-center z-20 relative w-full justify-between gap-x-1.5 font-semibold text-base">
										Recomended
										<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
									</Menu.Button>
									<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
									>
									<Menu.Items className="absolute  right-0 z-10 rounded-md bg-white custom-menu-item2">
										<div className="menu-item-inner2">
											<Menu.Item>
												<span className='block'>Recomended</span>
													
											</Menu.Item> 
											<Menu.Item>
												<span className='block'>Recomended</span>
											</Menu.Item> 
										</div>
									</Menu.Items>
									</Transition>
										</Menu>

							</div>
						</div>
						<div className="hidden md:grid grid-col-1">
						  <div className="flex flex-wrap items-center">
								<PillItem />
								<PillItem />
								<PillItem />
								<button className={`${styles.clearBtn} mb-4`}>
								   Clear All
								</button>
							</div>
							
						</div>
						<div className="TopProducts gutters-grid-view">
							<div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-1">
								{data.products.map((product, index) => {
									return (
										<div key={product.title+index}>
										<ProductCard productData={product}  />
										</div>
									)
								})
								}
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.paginationSec} mt-28 mb-16`}>
					<Pagination />
				</div>
				</>
			</main>
			
		</>
		);
	};
	export default Category;
	Category.Layout = "Default";