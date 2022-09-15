import { Routes, Route } from 'react-router-dom';

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
