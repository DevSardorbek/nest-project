import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import star from "../../assets/star2.png"
import "./produt.css"


const Products = ({data, loading}) => {
    let products = data?.map((el)=> 
    <div className='card' key={el.id}>
      <Link to={`/product/${el.id}`}>
        <img src={el.images[0]} alt={el.title} />
      </Link>
      <h2>{el.title}</h2>
      <p>{el.description}</p>
      <div className='rating'>
        <h3>${el.price}</h3>
        <div>
        <img src={star} alt="" /> 
        <p>{el.rating}</p>
        </div>
      </div>
  </div>)
  return (
    <>
        {loading ?  <Skeleton count={10}/> : <></>}
        <div className='wrapper'>{products}</div>
    </>
  )
}

export default Products




