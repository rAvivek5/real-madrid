import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import News from './News'
const Header = () => {
  return (
    <>
      <div className='header1'>
        <h3 className='header__link'>HONOURS</h3>
        <div className='vl2'></div>
        <h3 className='header__link'>FOUNDATION</h3>
        <div className='vl2'></div>
        <h3 className='header__link'>RM NEXT</h3>
        <div className='vl2'></div>
        <h3 className='header__link'>SIGN UP</h3>
        <div className='vl2'></div>
        <h3 className='header__link'>LOGIN</h3>
        <div className='vl2'></div>
        <div className='vl2'></div>
      </div>
      <div className='header2'>
        <img
          className='header__image_lazo'
          src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_lazo.png'
          alt=''
        />

        <img
          className='header__image__realMadrid'
          src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo.svg'
          alt=''
        />
        <div className='vl3'></div>

        <img
          className='header__image'
          src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/realmadrid_parche_13champions.png'
          alt=''
        />
      </div>

      <div className='style'>
        <div className='header3'>
          <h3 className='header__link'>HOME</h3>
          <h3 className='header__link'>FOOTBALL</h3>
          <div class='hide'>
            {/* <div className=''>
              <h2>FIRST TEAM</h2>
              <h2>ACADEMY</h2>
              <h2>WOMEN'S TEAM</h2>
            </div> */}
          </div>
          <h3 className='header__link'>BASKETBALL</h3>
          <h3 className='header__link'>THE CLUB</h3>
          <h3 className='header__link'>MEMBERS</h3>
          <h3 className='header__link'>FANS</h3>
          <h3 className='header__link'>BERNABEU STADIUM</h3>
          <h3 className='header__link'>RMTV</h3>
        </div>
        <div className='header4'>
          <h4 className='h4__links'>TICKETS</h4>
          <div className='vl2'></div>
          <h4 className='h4__links'> HOSPITALITY</h4>
          <div className='vl2'></div>
          <h4 className='h4__links'>TOUR</h4>
          <div className='vl2'></div>
          <h4 className='h4__links'>SHOP</h4>
          <div className='vl2'></div>
          <h4 className='h4__links'>MADRIDISTAS</h4>
          <div className='vl2'></div>
          <SearchIcon />
        </div>
      </div>
    </>
  )
}

export default Header
