import React from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera'
import './News.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
const News = () => {
  return (
    <>
      <h1>NEWS</h1>
      <div className='two60-40'>
        <>
          <div className='news'>
            <div className='news1'>
              <img
                className='image-100'
                src='https://www.realmadrid.com/img/cc_960px/gettyimages-1365914130__20220120105519.jpg'
                alt=''
              />
              <h3 className='type-description'>MATCH REPORT</h3>
              <h4 className='title'>
                Ten-man Madrid mount comeback to clinch Copa quarter-final spot
              </h4>
              <h3 className='type-description'>
                Goals by Isco and Hazard in the second half of extra-time in
                Elche clinched a quarter-final berth for Real Madrid, who played
                with 10 men from the 102nd minute.
              </h3>
              <div className='flex-end'>
                <LinkedCameraIcon />
                {/* <h4 className='moreAboutNews'>SEE GALLERY</h4>
                <PlayCircleOutlineIcon />
                <h4 className='moreAboutNews'>SEE VIDEO</h4> */}
                <div className='vl23'></div>
                <FacebookIcon />
                <div className='vl23'></div>
                <TwitterIcon />
              </div>
            </div>
          </div>
        </>

        <div className='RMTV-ads'>
          <div className='flex123-header-lr'>
            <LiveTvIcon />
            <h3 className='abc'>REAL MADRID TV</h3>
          </div>
          <img
            className='image-100'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhDdoooKvU_VGZmoNEGHAM_6UPgNMsJeYBQ&usqp=CAU'
            alt=''
          />

          <div className='margin-bottom'></div>

          <div className='border-left-right'>
            <div className='flex123-header'>
              <CalendarTodayIcon />
              <h3 className='abc'>REAL MADRID CALENDAR</h3>
            </div>
            <div className='flex-around-filter'>
              <h4 className='events'>Filter events</h4>
              <h4 className='events'>All events</h4>
            </div>
            <div className='flex-around-t'>
              <img
                className='logoRM'
                src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg'
                alt=''
              />

              <div>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
              </div>
            </div>

            <div className='flex-around-bg'>
              <div className='flex123'>
                {/* <EmojiEventsIcon />
              <AirlineSeatFlatAngledIcon /> */}
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg'
                  alt=''
                />
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/elche_peq.png'
                  alt=''
                />
              </div>

              <div>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Elche</h1>
              </div>

              <div className='infoaboutmatch'>
                <h1 className='nextmatchinfo'>LALIGA</h1>
                <h2 className='nextmatchinfo_matchday'>Sun, 23 Jan</h2>
                <h1 className='nextmatchinfo'>16.15H</h1>
                <h1 className='nextmatchinfo'>Santigo Bernabeu</h1>
              </div>
            </div>

            <div className='flex-around-bg'>
              <div className='flex123'>
                {/* <EmojiEventsIcon />
              <AirlineSeatFlatAngledIcon /> */}
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg'
                  alt=''
                />
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/granada_peq.png'
                  alt=''
                />
              </div>

              <div>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Elche</h1>
              </div>

              <div className='infoaboutmatch'>
                <h1 className='nextmatchinfo'>LALIGA</h1>
                <h2 className='nextmatchinfo_matchday'>Sun, 23 Jan</h2>
                <h1 className='nextmatchinfo'>16.15H</h1>
                <h1 className='nextmatchinfo'>Santigo Bernabeu</h1>
              </div>
            </div>

            <div className='flex-around-bg'>
              <div className='flex123'>
                {/* <EmojiEventsIcon />
              <AirlineSeatFlatAngledIcon /> */}
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/villarreal_peq.png'
                  alt=''
                />
                <img
                  className='logoRM'
                  src='https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/header_logo_mobile.svg'
                  alt=''
                />
              </div>

              <div>
                <h1 className='nextmatchinfo'>Real Madrid</h1>
                <h1 className='nextmatchinfo'>Elche</h1>
              </div>

              <div className='infoaboutmatch'>
                <h1 className='nextmatchinfo'>LALIGA</h1>
                <h2 className='nextmatchinfo_matchday'>Sun, 23 Jan</h2>
                <h1 className='nextmatchinfo'>16.15H</h1>
                <h1 className='nextmatchinfo'>Santigo Bernabeu</h1>
              </div>
            </div>

            <div className='paddingin'>
              <h1 className='seecalendar'>SEE THE COMPLETE CALENDAR</h1>
            </div>
          </div>
          <div className='ads'>
            <img
              className='image-100-mt'
              src=' https://tpc.googlesyndication.com/simgad/11192229894469342980?'
              alt=''
            />
            <img
              className='image-100-mt'
              src=' https://tpc.googlesyndication.com/simgad/14242641124353647018'
              alt=''
            />
            <img
              className='image-100-mt'
              src=' https://tpc.googlesyndication.com/simgad/13284565353335546941'
              alt=''
            />
            <img
              className='image-100-mt'
              src=' https://tpc.googlesyndication.com/simgad/12041182601192206844'
              alt=''
            />
            <img
              className='image-100-mt'
              src=' https://tpc.googlesyndication.com/simgad/8501701757934073161'
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default News
