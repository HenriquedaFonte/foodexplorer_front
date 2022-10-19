import { Routes, Route } from 'react-router-dom'

import { HomeAdmin } from '../pages/HomeAdmin'
import { HandleCommands } from '../pages/HandleCommands'
import { AddDish } from '../pages/AddDish'
import { ProductDetail } from '../pages/ProductDetail'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeAdmin />} />
      <Route path='/handlecommands' element={<HandleCommands />} />
      <Route path='/adddish' element={<AddDish />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
    </Routes>
  )
}
