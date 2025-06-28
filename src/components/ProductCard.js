import { useEffect, useState } from "react"
import {add, remove} from "../store/cartSlice"
import {useDispatch, useSelector} from 'react-redux'
export const ProductCard = ({product}) => {
    const cartList = useSelector(state => state.cartState.cartList)
    const dispatch = useDispatch()
    const [isInCart, setIsInCart] = useState(false)
    useEffect(()=>{
        const isProductInCart = cartList.find(cartItem => cartItem.id === product.id)
        if(isProductInCart)
        {
            setIsInCart(true)
        }
        else
        {
            setIsInCart(false)
        }
    }, [cartList, product.id])
    
    
    function handleAdd(product)
  {
    dispatch(add(product))
    
  }
  function handleRemove(product)
    {
      dispatch(remove(product));
      
    }
  return (
    
    <div className='m-10 w-80'>
                <img src={product.img} alt="" className='w-80 h-60'/>
                <p className='flex justify-between m-2'>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                </p>
                {isInCart ? (<button className='p-2 border-gray-400 border-1 text-sm bg-red-500 rounded m-2' onClick={()=>dispatch(remove(product))}>Remove</button>) :<button className='p-2 border-gray-400 border-1 text-sm bg-red-300 rounded m-2' onClick={()=>dispatch(add(product))}>Add to Card</button>}
        </div>
            
  )
}
