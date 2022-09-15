import React from 'react'
import styles from './Heading.module.css'

const Heading = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.title}>Invest Now</div>
      <div className={styles.sub}>venture buddy offers a variety of investment<span className='d-block'></span> opportunities.</div>
      
    </div>
  )
}

export default Heading
