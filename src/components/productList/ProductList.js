import React from 'react'
import './product.css'
import Product from '../product/Product'
import {products} from '../../data'
export default function ProductList() {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title" style={{fontWeight:"bold"}}>Create  & inspire. It's Me</h1>
        <p className="pl-desc">
            
        </p>
      </div>
      <div className="pl-list">
            {
                products.map(item=>(
                    <Product img={item.img} key={item.id} link={item.link}/>
                ))
            }
           


      </div>
    </div>
  )
}
