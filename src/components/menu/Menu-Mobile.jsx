import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

export const MenuMobile = () => {

  return (
    <div className='viewMenu'>
        <div className='container-menu'>
            <ul>
                <li>
                    <i className="fa-solid fa-house"></i>
                   <Link>
                        Home
                   </Link>
                </li>
                <li>
                    <i class="fa-solid fa-sheet-plastic"></i>
                   <Link>
                        My post
                   </Link> 
                </li>
                <li>
                    <i className="fa-regular fa-bell"></i>
                    <Link>
                        Notifications 
                    </Link>
                </li>
                <li>
                    <i class="fa-solid fa-star"></i>
                    <Link>
                        Follow
                    </Link>
                </li>
                <li>
                    <i class="fa-solid fa-circle-user"></i>
                    <Link>
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
