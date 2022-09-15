import React from 'react'
import styles from './Option.module.css'
import search from '../../assets/search.svg'
import dropdown from '../../assets/dropdown.svg'

const Options = () => {
  return (
    <div className={`${styles.options} d-flex flex-row `}>
        <img src={search} className={styles.icon} height="16px" width="16px" alt="" />
        <input type="text" id={styles.search} className="border-0 rounded-pill text-center" placeholder="Search for interest startups" />
        <button className={`${styles.btn} btn rounded-pill`}>Sector<img src={dropdown} className={styles.dropdown} height="6px" width="10px"  alt="dropdown" />
        </button>
        <button className={`${styles.btn} btn rounded-pill`}>Tech
        <img src={dropdown} className={styles.dropdown} height="6px" width="10px"  alt="dropdown" />
       </button>
         <button className={`${styles.btn} btn rounded-pill`}>Revenue
         <img src={dropdown} className={styles.dropdown} height="6px" width="10px"  alt="dropdown" />
         </button>
        
        
    </div>
  )
}

export default Options
