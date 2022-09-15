import { Link, useNavigate } from 'react-router-dom';

import { TbClipboardList } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { Container } from './styles';
import logoIcon from '../../assets/Polygon.png';
import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';


export function HeaderAdmin() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  return (
    <Container>
      <div className='headerContent'>  
       <div className="left">
        <Link to='/'>
          <div className='projectLogo'>
            <img src={logoIcon} alt='' />
            <h1>Food Explorer</h1>
          </div>
        </Link>
       </div>
       <div className="right">
        <Link to='/adddish' >
          <ButtonText 
            title='Admin'                   
          />
        </Link>
        <Link to='/'>
          <button id='command'>
            <TbClipboardList size={18} />
            Commands
          </button>
        </Link>
       </div>
       <div className="logOut" onClick={signOut} navigate={'/'}>
          <MdLogout size={30} fill="white"/>
        </div>
      </div>    
    </Container>
  );
};
