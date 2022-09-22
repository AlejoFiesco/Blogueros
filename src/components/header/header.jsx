import React from 'react'

import './header.css';

export const Header = () => {
  return (
      <header className='header'>
        <div className='header-container row ps-2 pe-2 '>
            
            <div className='container-menu col-2 text-center'>
              <span  role='button' onClick={()=>alert('desplegando menu')}>
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>

            <div className='col text-center'>
              <h3>NEWS</h3>
            </div>

            <div className='container-img  col-2'>
              <div>
                  <img src='https://www.blogdelfotografo.com/wp-content/uploads/2022/01/retrato-anillo-luz.jpg' 
                      alt='imgProfile' 
                      className='profile-image rounded-circle'/>
              </div>
            </div>

        </div>
      </header>
  )
}
