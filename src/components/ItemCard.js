import {items} from './items'

import { ProductCard } from './ProductCard'
export const ItemCard = () => {
  
  return (
    <main className='flex flex-wrap justify-center'>
    {items.map((product) => (
          <ProductCard key = {product.id} product = {product}/>  

  ))}
  </main>
  )
}
