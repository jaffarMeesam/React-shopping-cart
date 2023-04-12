import React from 'react'
import {  Navbar,Container, FormControl, Nav, Dropdown,Badge } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { useGlobleData } from '../Contaxt/Context';
import {AiFillDelete} from 'react-icons/ai'
import { Link,NavLink } from 'react-router-dom';


const Header = () => {
    const{state:{cart},dispatch}=useGlobleData()
    
  return (
    <>
        <Navbar className='fixed-top' bg='dark' variant='dark' style={{height:'80px'}}>
            <Container>
                <Navbar.Brand><NavLink to='/' className={'text-light text-decoration-none'}>Shopping Cart</NavLink></Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width:500 , borderRadius:'none'}} 
                    placeholder='Search a product' className='m-auto'/>
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle>
                            <FaShoppingCart/>
                            <Badge> {cart.length} </Badge>
                        </Dropdown.Toggle>
                            <Dropdown.Menu  style={{minWidth:370}} align='end'>
                               {cart.length>0?(
                                <>
                                {cart.map((product)=>
                                {
                                    return( <>
                                    <div className='product-details'>
                                        <img src={product.images} alt={product.title}/>
                                        <div className='titlediv'>
                                        <p className='m-0'>{product.title}</p>
                                        <span>Rs: {product.price}</span>
                                        </div>
                                       <AiFillDelete fontSize='23px'
                                       style={{cursor:'pointer',marginLeft:20}}
                                       onClick={()=>
                                        {
                                            dispatch({
                                                type:'Remove_From_Cart',
                                                payload:product
                                            })
                                        }}
                                       />
                                        
                                    </div>
                                    </>)
                                })}
                                    <Link to='/cart'>
                                    <button className='btnn'>Go To Cart </button>
                                    </Link>
                                    
                                </>
                               ):(<p style={{padding:'0px 10px'}}>cart is empty</p>)}
                        </Dropdown.Menu>
                        
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
        <Container>
            
        </Container>
    </>
    
  )
}

export default Header
