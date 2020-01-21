
import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'


export class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items:[
                 {
                     title:'clothing',
                     imageUrl:'https://www.dhresource.com/webp/m/0x0s/f2-albu-g8-M00-42-17-rBVaVF4Vmy-AJDEcAADJPdTopHA821.jpg/boys-clothing-set-summer-2020-new-children.jpg',
                     id:1,
                     linkUrl:'clothing'
                 },
                 {
                    title:'footwear',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRSoysZJ6NgK47jZfMRF7w2ghc1nlwzNDm5-nf2eFiOTxu4l3DA&s',
                    id:2,
                    linkUrl:'footwear'
                 },
                 {
                    title:'accessories',
                    imageUrl:'https://image.freepik.com/free-photo/baby-accessories-newborns_73944-8314.jpg',
                    id:3,
                    linkUrl:''
                   
                 },
                 {
                    title:'strollers',
                    imageUrl:'https://cdn.shopify.com/s/files/1/2348/7651/products/aulon-luxury-baby-stroller-3-in-1-accessories-pram-all-black-3pcs-mommies-best-mall-carriage_402_800x.jpg?v=1574667538',
                    id:4, 
                    size:'large',
                    linkUrl:''
                 },
                 {
                    title:'car seats',
                    imageUrl:'https://i5.walmartimages.com/dfw/4ff9c6c9-7080/k2-_5a187c1d-edc8-4abb-87e1-22f2a27e8b8a.v1.jpg?odnWidth=672&odnHeight=672&odnBg=ffffff',
                    id:5,
                    size:'large',
                    linkUrl:''
                 },
                 {
                    title:'toys',
                   // imageUrl:'https://clipartart.com/images/clipart-images-of-toys-4.jpg',
                    id:6,
                    imageUrl:'https://s7d9.scene7.com/is/image/OCProduction/ff147?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0',
                    size:'large',
                    linkUrl:''
                 },
                

             ]
        }
    }
    
    render() {
        return (
            <div className='directory-menu'>
                {
                    // this.state.items.map(({title, imageUrl,id,size,linkUrl})=>(
                    //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    // )
                    //     )
                        this.state.items.map(({id,...otherItemProps})=>(
                            <MenuItem key={id} {...otherItemProps}/>
                        )
                            )
                }
            </div>
        )
    }
}

export default Directory;
