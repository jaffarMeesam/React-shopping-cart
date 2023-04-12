import React from 'react'
import { useGlobleData } from '../Contaxt/Context'
import {Container} from 'react-bootstrap'
import SingleProduct from './SingleProduct';
import Spinner from './Spinner';


const Home = () => {
  const{state:{products},isloading}=useGlobleData();
  console.log(products);
    // const[prodFilter,setProdFilter]=useState('')
    
    // const filterByCate=(category)=>
    // {
    //     const updatedData=products.filter(item=>item.category.name===category)

    //     setProdFilter(updatedData)
    // }
    

  return (
    <>
    {/* <div className='navfilter'>
      <Container>
      <button className='btn btn-secondary ' onClick={()=>filterByCate('price')} >Furniture</button>
      <button className='btn btn-secondary 'onClick={()=>filterByCate('shoes')}>Shoes</button>
      <button className='btn btn-secondary '>Electronics</button>
      <button className='btn btn-secondary '>Cloths</button>
      <button className='btn btn-secondary '>Others</button>
      <button className='btn btn-secondary '>All</button>
      </Container>
    
    </div> */}
      <Container>
        
        
        <div className='row mt-5'>
          
          {isloading?<Spinner/>: products.map((product)=>
          {
            return <SingleProduct product={product} key={product.id} />
            
          })}
        </div>
      </Container>
    </>
  )
}

export default Home