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

    <div className='container-follow row align-items-center mb-2'>
        <div className='container-img  col-2'>
            <img src={image} alt='imgProfile' className='rounded-circle'/>
        </div>

        <div className='col p-2'>
            <div className='container-name'>
                <h5>{name}</h5>
            </div> 

            <div className='container-links d-flex'>
                {
                    !follow 
                    ? <div className='btn-follow' onClick={onUnfollow}><span>Unfollow</span></div> 
                    : <div className='btn-follow' onClick={onFollow}><span>Follow</span></div>
                
                }              
            </div>
        </div>

        <div className='col-2 d-flex align-items-center'>
            <p>
            <i className="fa-light fa-bell"></i>
            </p> 
        </div>
    </div>
  )
}
