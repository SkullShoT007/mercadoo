import {remove} from '../store/cartSlice'
import {useDispatch, useSelector} from 'react-redux'
export const Cart = () => {
    const cartList = useSelector(state => state.cartState.cartList)
    const total = useSelector(state => state.cartState.total)
    const dispatch = useDispatch()
    function handleRemove(product)
    {
      dispatch(remove(product))
      
    }
    

  return (
    <main>
      <h1 className='text-center font-bold'>Total: {total}</h1>
        {cartList.map((item) => (
            <div className='m-4 border rounded flex items-center justify-between p-2 text-sm'>
                <img className='max-w-40' src={item.img}alt="" />
                <p>Product Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <button className='p-2 bg-red-600 text-red-50' onClick = {() => handleRemove(item)}>remove</button>
            </div>
        ))}
    </main>
  )
}
