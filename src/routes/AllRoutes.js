import {Routes, Route} from 'react-router-dom'
import { ItemCard } from '../components/ItemCard'
import {Cart} from '../components/Cart'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<ItemCard/>}/>
            <Route path = "/cart" element = {<Cart />}/>
        </Routes>
    </div>
  )
}
