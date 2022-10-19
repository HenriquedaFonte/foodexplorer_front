import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { ProductDetail } from '../pages/ProductDetail'
import { Cart } from '../pages/Cart'
import { Commands } from '../pages/Commands';

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
