import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/CategoryIconGrid.module.scss';

export default function CategoryIconGrid({categoryData}:any) {
  
  return (
    <div className="categoryIconGrid-item text-center">
      <div className="cat_circle" style={{backgroundColor:categoryData.catColor}}>
        <span>
          <Image
            src={categoryData.imageUrl}
            alt="CofeBeans"
          />
        </span>
      </div>
		  <span className='cat_title'>{categoryData.title}</span>
	</div>
  )
}
