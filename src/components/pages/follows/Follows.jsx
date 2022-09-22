import React from 'react';
import { Follow } from './Follow';
import dataFollow from './data/dataFollows';

import './follows.style.css';
import { Header } from '../../header/Header';


export const Follows = () => {

  return (
    <>
      <Header />
      <div className='container p-5'>
          {
              dataFollow.map( dataF => (
                  <Follow key={dataF.id} name={dataF.name} image={dataF.image} />
              ))
          }
      </div>
    </>
  )
}
