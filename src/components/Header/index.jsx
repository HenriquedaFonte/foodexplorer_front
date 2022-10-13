import { Link, useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { Container } from './styles';
import logoIcon from '../../assets/Polygon.png';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';
import Cart from '../../assets/cart.svg';
import { useState, useEffect } from 'react';
import { api } from '../../services/api'

export function Header(props) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]); 

  let amount = props.amount;

  useEffect(()=>{
    async function fetchDishes(){
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }
    fetchDishes();
  }, [search]);

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
        <div className="cart" >
          <label>{amount}</label> 
          <img src={Cart} onClick={() => navigate('/Cart')}/>
        </div>
        <div className="logOut" onClick={signOut}>
          <MdLogout size={30} fill="white"/>
        </div>  
      </div>    
    </Container>
  );
};
