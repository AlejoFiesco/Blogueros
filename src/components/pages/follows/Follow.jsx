import React, { useState } from 'react'

export const Follow = ({name, image}) => {

    const [follow, setFollow] = useState(false);

    const onUnfollow = ()=>{
        setFollow(true);
    }
    const onFollow = ()=>{
        setFollow(false);
    }

  return (

    <div className='container-follow row  mb-2'>
        <div className='container-img  col-2 d-flex align-items-center'>
            <div>
                <img src={image} alt='imgProfile' className='profile-image rounded-circle'/>
            </div>
        </div>

        <div className='col p-2'>
            <div className='container-name'>
                <h5>{name}</h5>
            </div> 

            <div className='container-btn d-flex'>
                {
                    !follow 
                    ? <div className='btn-follow' onClick={onUnfollow}><span role='button'>Unfollow</span></div> 
                    : <div className='btn-follow' onClick={onFollow}><span role='button'>Follow</span></div>
                
                }              
            </div>
        </div>

        <div className='container-icon col-2 d-flex align-items-center'>
            <div>
                <i class="fa-regular fa-bell"></i>
            </div> 
        </div>
    </div>
  )
}
