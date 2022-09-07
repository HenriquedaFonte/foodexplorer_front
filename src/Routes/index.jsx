import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user }  = useAuth()

  let ReadRouter
  if(user) {
    if(user.email === 'admin@email.com') {
      ReadRouter = AdminRoutes;
    } else {
      ReadRouter = AppRoutes
    }
  }else {
    ReadRouter = AuthRoutes
  }

  return (       
    <BrowserRouter>    
      <ReadRouter/>
    </BrowserRouter>
  );
};
