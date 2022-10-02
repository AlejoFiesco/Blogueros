import './profile.css';

export const Profile = () => {
  return (
    <>
        <div className='container-profile'>
            <div className='container-profile-img'>
                <img src='https://www.blogdelfotografo.com/wp-content/uploads/2022/01/retrato-anillo-luz.jpg' alt='img profile'/>
            </div>
            <div className='container-profile-info'>
                <h1>name</h1>
                <div className='container-list'>
                    <ul>
                        <li>
                            <div>
                                <span>10</span> Followers
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>10</span>  In a row
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>10</span> Post
                            </div> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='text-center'>
            <h1>POST</h1>
        </div>
    </>
  )
}
