import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { Commands } from '../pages/Commands'
import { ProductDetail } from '../pages/ProductDetail'
import { Cart } from '../pages/Cart'

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
