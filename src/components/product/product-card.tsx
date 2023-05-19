import React from 'react'
import Image from 'next/image'
import heart from '../../assets/images/svg/heart.svg';
import styles from '../../styles/components/product/ProductCard.module.scss';

export default function ProductCard({ productData }:any) {

  return (
    <div>
      <div className={`${styles.prdCard} ${styles.hasDiscount} block rounded-lg bg-white  dark:bg-neutral-700`}>
        <a href="">
          <div className={styles.productThumb}>
            <Image
              className="rounded-t-lg text-center"
              src={productData.imageUrl}
              alt={productData.title} />
            <div className={styles.tagSec}>
              {/* New Arrival Tag */}
              <div className='new-arrival'>
                <span>New Arrival </span>
              </div>
              <div className={styles.heartIcon}>
                <span>
                  <Image
                    src={heart}
                    alt="heart Icon"
                    width={20}
                    height={18}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.prdDetails}>
            <h5
              className={styles.prdTitle}>
              {productData.title}
            </h5>
            <p className={styles.prdCategory}>
              {productData.prdCat}
            </p>
            <p className={`${styles.priceTag} flex items-center flex-wrap`}>
              <s className={styles.oldPrice}> {productData.discountedPriceTag}</s>
             <span className={styles.newPrice}>{productData.priceTag}</span> 
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
