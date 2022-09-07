import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { Commands } from '../pages/Commands';
import { HandleCommands } from '../pages/HandleCommands';
import { AddDish } from '../pages/AddDish';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HandleCommands />} />
      <Route path='/adddish' element={<AddDish />} />
    </Routes>
  );
};
