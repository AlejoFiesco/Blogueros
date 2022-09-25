import React, { useState } from 'react';
import { Follow } from './Follow';
import dataFollow from './data/dataFollows';

import './follows.style.css';
import { Header } from '../../header/Header';
import { MenuMobile } from '../../menu/Menu-Mobile';




export const Follows = () => {

  const [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow (!show)
  }

  
  return (
    <>
      <Header handleShowMenu={handleShowMenu}/>

      <div className='container-follows'>
          {
            show && <MenuMobile />
          }
          
          <div className='container p-5'>
              {
                  dataFollow.map( dataF => (
                      <Follow key={dataF.id} name={dataF.name} image={dataF.image} />
                  ))
              }
          </div>
      </div>
    </>
  )
}
