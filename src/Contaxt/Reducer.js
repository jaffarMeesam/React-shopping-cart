
export const cartReducer=(state,action)=>
  {
    switch(action.type)
    {
      case 'Add_Products':
        return {...state,
          products:action.payload}


      case 'Add_To_Cart':
       
        return {
          ...state,
          cart:[...state.cart,{...action.payload,qty:1}]
        }
        case 'Remove_From_Cart':
          
        return {
          ...state,
          cart:state.cart.filter(item=>item.id!==action.payload.id)
        }

        case 'Change_product_qty':
          
        return {
          ...state,
          cart:state.cart.filter(item=>item.id===action.payload.id?item.qty=action.payload.qty:item.qty)
        }

        
      default:
        throw new Error()
    }
  }