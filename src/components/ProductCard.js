import React from 'react'
import './ProductCard.css'
import StarRating from './StarRating'


const ProductCard = (props) => {

const product = props.product
console.log("rating",product.rating.rate);

    return (
    <div className='grid-container'>
      <div className='card'>
        <div className='img'><img src={product.image} width={100} s alt="" /></div>
        <div className='card-des'>
        <p className='title' >{product.title}</p>
        <div className='rating'><div><StarRating rating ={parseFloat(product.rating.rate)}/></div> {product.rating.count}</div>
        <p>${product.price}</p>
        </div>
       
      </div>
      

    </div>
  )
}

export default ProductCard
