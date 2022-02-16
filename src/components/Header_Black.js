import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import './Header_Black.css'

const Header_Black = () => {
  return (
    <>
      <div className='bg__black'>
        hala madrid
        <div className='vl'></div>
        <img
          className='headerB__image'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png'
          alt=''
        />
        <div className='vl'></div>
        <img
          className='headerB__image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtzw3iTBnUdW-M0s5HpJItDifeHWgnJCO1g&usqp=CAU'
          alt=''
        />
        
        <MoreHorizIcon className='headerB__icon' />
      </div>
    </>
  )
}

export default Header_Black
