import React,{Component} from 'react'
import Shop_Data from './ShopData.js'
import Preview from '../../components/prewiew/preview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview';


export class Shop extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            collections:Shop_Data
      
        }
    }
    
    render() {
        const {collections} =this.state;
        return (
            <div className='shop-page'>
              {collections.map(({id, ...otherCollectionProps})=>(
                  <CollectionPreview key ={id} {...otherCollectionProps}/>
              ))} 
            </div>
        )
    }
}

export default Shop
