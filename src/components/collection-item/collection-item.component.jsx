import React from 'react'
import './collection-item.styles.scss'
import {withRouter} from 'react-router-dom'


const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default withRouter(CollectionItem);;
// const CollectionItem=({id,name,imageUrl, history, match, linkUrl})=>(
//     <div className='collection-item' onClick={()=>history.push(`${match.url}${linkUrl}`)}>
//         {/* <div className='collection-item'> */}
//             <div
//             className='background-image1'
//             style={{
//                 backgroundImage:`url(${imageUrl})`
//             }}
//             >
//                 <div className='content1'>
//                     <h1 className='title'>
//                        {name.toUpperCase()}
//                     </h1>
//                     </div>
//                  {/* <div className='collection-footer'>
//                <span className='name'> {name}</span>
//                <span className='price'> {price}</span>
//                 </div>  */}
//                </div>


// </div>
    //              <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    //     <div className='background-image' style={{
    //     backgroundImage:`url(${imageUrl})`
    // }} />
    //             <div className='content'>
    //                 <h1 className='title'>
    //                    {title.toUpperCase()}
    //                 </h1>
    //                 <span className='subtitle'>SHOP NOW</span>
    //             </div>
    //         </div> 
               
        
           

       
      
