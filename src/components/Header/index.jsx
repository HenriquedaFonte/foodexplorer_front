import { FiSearch, FiClipboard } from 'react-icons/fi';
import { MdLogout } from 'react-icons/md';
import { Container } from './styles';
import  logoIcon  from '../../assets/Polygon.png';
import { ButtonText } from '../ButtonText';
import { Input } from '../Input';

export function Header () {
  return(
    <Container>
      <div className="projectLogo">
        <img src={logoIcon} alt="" />
        <h1>Food Explorer</h1>
      </div>
      <ButtonText title="Favorites" />
      <Input 
          type="text"
          placeholder="Search for plate options"
          icon={FiSearch}
      />
      <button>
        <FiClipboard size={18}/>
        My command (0)
      </button>
      <div className="logOut" onClick={() => console.log("test")}>
        <MdLogout size={30} fill="white" />
      </div>
    </Container>
  );
};