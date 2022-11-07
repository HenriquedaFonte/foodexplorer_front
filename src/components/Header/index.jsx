import { Link, useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { Container } from './styles';
import logoIcon from '../../assets/Polygon.png';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';
import Cart from '../../assets/cart.svg';

export function Header({onchange, ...props} ) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  let amount = props.amount;


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
          onchange={(value)=> onchange(value)}
        />
        <div className="cart" >
          <label>{amount}</label> 
          <img src={Cart} onClick={() => navigate('/Cart')}/>
        </div>
        <Link to='/commands'>
          <button id='command'>
            Command
          </button>
        </Link>
        <div className="logOut" onClick={() => {signOut(); navigate('/')}}>
          <MdLogout size={30} fill="white"/>
        </div>  
      </div>    
    </Container>
  );
};
