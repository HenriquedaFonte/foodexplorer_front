import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'
import { ProductDetail } from '../pages/productdetail'
import { Cart } from '../pages/cart'
import { Commands } from '../pages/commands';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/commands" element={<Commands />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
    </Routes>
  )
}
