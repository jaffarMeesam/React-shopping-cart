import React, { useEffect, useState } from 'react'
import { Container, Form} from 'react-bootstrap'
import { useGlobleData } from '../Contaxt/Context'
import {AiFillDelete} from 'react-icons/ai'
import { Button } from 'react-bootstrap'

const Cart = () => {
  const{state:{cart},dispatch}=useGlobleData()

  const[total,setTotal]=useState('')

  useEffect(()=>
  {
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  },[cart])
   
  return (
    <div className='cart'>
      <Container>
      <div className='row'>
        
        <div className='col-md-9 '>
          
            {cart.map((product)=>{
              const{title,images,price}=product
              return(
                <>
                <div className='row mt-3'>
                    <div className='col-sm-2'><img className='cartImg' src={images} alt={title}></img></div>
                    <div className='col-sm-2'>{title}</div>
                    <div className='col-sm-2'>Rs. {price}</div>
                    <div className='col-sm-2'>
                      <Form.Select 
                      onChange={(e)=>{
                        dispatch({
                          type:'Change_product_qty',
                          payload:
                          {
                            id:product.id,
                            qty:e.target.value
                          }
                        })
                      }}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </Form.Select>
                    </div>
                    <div className='col-sm-2'>
                      <AiFillDelete
                      style={{fontSize:20,cursor:'pointer'}}
                     onClick={
                      ()=>{dispatch({type:'Remove_From_Cart',payload:product})}
                     }
                      />
                    </div>
                    
                  </div>
                </>
              )
            })}
           
          
        </div>
        <div className='col-md-3 sidebar'>
          <h4 className='mb-4' >Subtotal ({cart.length}) Items</h4> 
          <h5>Total Rs:<span className='text-success'>{total}</span></h5>
          <Button size='sm'style={{width:250,marginTop:20}}>Proceed To Checkout</Button>
        </div>
        
       
      </div>
      </Container>
    </div>
  )
}

export default Cart