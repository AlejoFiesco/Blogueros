import { Follow } from './Follow';
import dataFollow from './data/dataFollows';

import './follows.style.css';





export const Follows = () => {
 

  
  return (
    <>
      

      <div className='container-follows'>      
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
