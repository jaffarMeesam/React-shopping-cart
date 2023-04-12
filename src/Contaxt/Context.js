import React, { createContext, useContext,useEffect,useReducer,useState } from 'react'
import { cartReducer } from './Reducer'
const AppContext= createContext()
const AppProvider = ({children}) => {
  const[state,dispatch]=useReducer(cartReducer,
    {
      products:[],
      cart:[]
    })
  const [isloading,setIsloading]=useState(false)
  const getDatafromApi=async()=>
  {
    setIsloading(true)
    const response=await fetch('https://api.escuelajs.co/api/v1/products')
    const dataFetch=await response.json()
    
    dispatch({
      type:'Add_Products',
      payload:dataFetch
    }) 
    setIsloading(false)
  }
  useEffect(()=>
  {
    getDatafromApi();
  },[])
  return <AppContext.Provider value={{state,dispatch ,isloading}}>{children}</AppContext.Provider> 
}
const useGlobleData=()=>
{
    return useContext(AppContext)
}

export {AppProvider, useGlobleData}