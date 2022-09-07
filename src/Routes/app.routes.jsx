import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Commands } from '../pages/Commands';
import { ProductDetail } from '../pages/ProductDetail';
import { AddDish } from '../pages/AddDish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/commands' element={<Commands />} />
      <Route path='/productdetail/:id' element={<ProductDetail />} />
    </Routes>
  );
};
