import { Link, useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { TbClipboardList } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { Container } from './styles';
import logoIcon from '../../assets/Polygon.png';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <Container>
      <div className="headerContent">  
        <Link to="/">
          <div className="projectLogo">
            <img src={logoIcon} alt="" />
            <h1>Food Explorer</h1>
          </div>
        </Link>
        <Link to='/favorites' >
          <ButtonText 
            title="Favorites"                   
          />
        </Link>
        <Input
          type="text"
          placeholder="Search for plate options"
          icon={FiSearch}
        />
        <Link to="/Commands">
          <button id="command">
            <TbClipboardList size={18} />
            Commands
          </button>
        </Link>
        <div className="logOut" onClick={signOut}>
          <MdLogout size={30} fill="white"/>
        </div>  
      </div>    
    </Container>
  )
}
