import React from 'react'
import styles from './pills.module.scss'
import Link from 'next/link'

export default function PillItem() {
  return (
    <div className={`${styles.pillsItemWrapper} relative`}>
        <span>Category: Blends</span>
        <button className={`${styles.btnCancelledPill}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.66675 13.3335C10.3487 13.3335 13.3335 10.3487 13.3335 6.66675C13.3335 2.9848 10.3487 0 6.66675 0C2.9848 0 0 2.9848 0 6.66675C0 10.3487 2.9848 13.3335 6.66675 13.3335ZM3.74839 3.74871C4.0053 3.49181 4.42183 3.49181 4.67873 3.74871L6.57918 5.64914L8.47943 3.74891C8.73634 3.492 9.15287 3.492 9.40978 3.74891C9.66668 4.00581 9.66668 4.42234 9.40978 4.67924L7.50953 6.57947L9.40913 8.47906C9.66604 8.73596 9.66604 9.15248 9.40913 9.40939C9.15222 9.66629 8.73569 9.66629 8.47879 9.40939L6.57918 7.50981L4.67938 9.40959C4.42247 9.66649 4.00594 9.66649 3.74903 9.40959C3.49213 9.15268 3.49213 8.73616 3.74903 8.47925L5.64884 6.57947L3.74839 4.67905C3.49148 4.42214 3.49148 4.00562 3.74839 3.74871Z" fill="#4D4D4D"/>
          </svg>
        </button>
    </div>
  )
}

