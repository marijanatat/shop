import React from 'react'
import './preview.styles.scss'

const Prewiew=({title, items})=>(
    <div className='collection-preview'>
       <h1 className='title'>{title}</h1>
       <div className='preview'>
            {items.filter((item,idx)=>idx<4).map(item=>
            (<div key={item.id}>{item.name}</div>)
        )}
       </div>
    </div>

)
export default Prewiew;