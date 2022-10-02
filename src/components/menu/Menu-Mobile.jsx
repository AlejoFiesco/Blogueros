import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export const MenuMobile = ({handleShowMenu}) => {

  return (
    <div className='viewMenu'>
        <div className='container-menu'>
            <ul>
                <li>
                    <i className="fa-solid fa-house"></i>
                   <Link onClick={handleShowMenu}>
                        Home
                   </Link>
                </li>
                <li>
                    <i className="fa-solid fa-sheet-plastic"></i>
                   <Link 
                        onClick={handleShowMenu}
                        to='/post'>
                        My post
                   </Link> 
                </li>
                <li>
                    <i className="fa-regular fa-bell"></i>
                    <Link onClick={handleShowMenu}>
                        Notifications 
                    </Link>
                </li>
                <li>
                    <i className="fa-solid fa-star"></i>
                    <Link 
                        onClick={handleShowMenu}
                        to='/follows'>
                        Follow
                    </Link>
                </li>
                <li>
                    <i className="fa-solid fa-circle-user"></i>
                    <Link 
                        onClick={handleShowMenu}
                        to='/profile'>
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
