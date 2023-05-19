import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import gridDealImg from '../../assets/images/grid-deal-img.png';
import reasonToShop from '../../../public/assets/images/reason-to-shop.png';
import newArrival from '../../../public/assets/images/new-arrival.png';
import megaDeals from '../../../public/assets/images/mega-deals.png';
import reasonToShopMbl from '../../../public/assets/images/reason-to-shop-mbl.png';
import newArrivalMbl from '../../../public/assets/images/new-arrival-mbl.png';
import megaDealsMbl from '../../../public/assets/images/mega-deals-mbl.png';
import styles from '../../styles/home/GridSectionDeal.module.scss';

export default function GridSectionDeal() {
  return (
    <div className='section-grid-deal py-10 px-4 section'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-4'>
          {/* <div className='grid-deal-bx p-4 bg-white rounded-xl'>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>More Reason to Shop</h4>
            <div className='flex flex-wrap'>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid-deal-bx p-4 bg-white rounded-xl'>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>Mega Deals</h4>
            <div className='flex flex-wrap'>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>Upto 40% Off</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div>
          <div className='grid-deal-bx p-4 bg-white rounded-xl'>
            <h4 className='lg:text-2xl md:text-lg font-semibold mb-0.5'>New Arrival</h4>
            <div className='flex flex-wrap'>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
              <div className='grid-deal-content mt-4 relative'>
                <Image src={gridDealImg} className='rounded-t-md' alt={''} />
                <div className='new-arrival new-arrival-sm'>
                  <span className='font-semibold'>New Arrival</span>
                </div>
                <div className='desc rounded-b-md p-2'>
                  <p className='mb-1 font-semibold'>Best Duo Deals</p>
                  <span>Get the best at the best prices</span>
                </div>
              </div>
            </div>
          </div> */}
          <Link href="">
            <Image src={reasonToShop} className='w-full md:block hidden' alt={''}/>
            <Image src={reasonToShopMbl} className='w-full md:hidden block' alt={''}/>
          </Link>
          <Link href="">
            <Image src={newArrival} className='w-full md:block hidden' alt={''}/>
            <Image src={newArrival} className='w-full md:hidden block' alt={''}/>
          </Link>
          <Link href="">
            <Image src={megaDeals} className='w-full md:block hidden' alt={''}/>
            <Image src={megaDealsMbl} className='w-full md:hidden block' alt={''}/>
          </Link>
        </div>
      </div>
    </div>
  )
}