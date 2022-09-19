import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="w-full nav" height="80px">
        <div className="navbar-container align-items-center h-full w-100 d-flex">
            <a className={styles.navbarBrand} href="/">
                <img src={logo} alt=""/>
            </a>
            <ul className="navbar-nav align-items-center d-flex flex-row ms-auto me-0">
                
                <a className={`${styles.navLink} nav-link`} href="/">Home</a>
                <a className={`${styles.navLink} nav-link`} href="/">Invest and Raise</a>
                <a className={`${styles.navLink} nav-link`} href="/">Valuation calculator</a>
                <a className={`${styles.navLink} nav-link`} href="/">Contact us</a>
                <div className={`${styles.navLink} nav-link`} href="/">|</div>
                <a className={`${styles.navLink} nav-link`} href="/">Login & Signup</a>
                <div className='absolute'>
                <button className={`btn ${styles.animate}`}></button>
                <button className={`btn ${styles.btnCustom}`} href="/">Live Deals</button>
                
                </div>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
