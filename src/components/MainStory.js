import React from 'react'
import './MainStory.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera'

const MainStory = () => {
  return (
    <>
      <div className='mainStory'>
        {/* <img className='mainStory__img'
          src='https://www.realmadrid.com/img/cc_1920px/63-gento_h_20220118100408.jpg'
          alt=''
        /> */}
        {/* <a className='bg__image'></a> */}

        <div className='bg__image'>
          <div className='bottom'>
            <h6 className='main__news'>NEWS STORY</h6>

            <h1 className='headline'>
              Gento is the only player ever to win six European Cups
            </h1>

            <div className='flex-start'>
              <LinkedCameraIcon />
              <h4 className='moreAboutNews'>SEE GALLERY</h4>
              <PlayCircleOutlineIcon />
              <h4 className='moreAboutNews'>SEE VIDEO</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainStory
