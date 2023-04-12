import { Button } from 'react-bootstrap'
import React from 'react'
import { useGlobleData } from '../Contaxt/Context'

const SingleProduct = ({product}) => {

  const{state:{cart},dispatch}= useGlobleData()
  
  
    const{title,price,category,images}=product
  return (
    <>
    <div className='col-11 col-sm-6 col-md-4 col-lg-3 my-3 mt-5'>
        <img src={images} alt={title}
        onClick={()=>dispatch({type:'Add_To_Cart',payload:product})} ></img>
        <h4 className='mt-2'>{title}</h4>
        <div className='display-flex justify-content-space-between'>
        <p className='m-0'>Rs: {price}</p>
        </div>
        <p className='m-0'>{category.name}</p>

        {cart.some(p =>p.id===product.id)?
        (<Button variant='danger' onClick={()=>dispatch({type:'Remove_From_Cart',payload:product})} size='sm' className='mt-2'>Remove From Cart</Button>):
        (
          <Button onClick={()=>dispatch({type:'Add_To_Cart',payload:product})}  size='sm' className='mt-2'>Add to Cart</Button>
        )}

        
       
        
    </div>
    </>
  )
}

export default SingleProduct
