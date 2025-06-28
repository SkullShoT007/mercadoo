import Logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList)
  
  return (
    <header className='p-0 m-0'>
        <nav className='flex items-center justify-between p-0'>
        <NavLink to="" className='flex items-center'>
            <img src={Logo} alt="site Logo" className='w-10 m-3' />
            <h1 className = 'font-bold'>MERCADOO</h1>
        </NavLink>
        <div className='p-0 m-0'>
            <NavLink
            to="/"
            className={({ isActive }) =>
              `w-10 m-3 p-2 rounded ${isActive ? 'bg-slate-500 text-white' : 'hover:bg-red-300'}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `w-10 m-3 p-2 rounded ${isActive ? 'bg-slate-500 text-white' : 'hover:bg-red-300'}`
            }
          >
            Cart
          </NavLink>
        </div>
        <NavLink className='w-10 m-3'>
            <p className='font-semibold'>Cart: {cartList.length}</p>
        </NavLink>
    </nav>

    </header>
    
  )
}
