import { FiSearch, FiClipboard } from 'react-icons/fi'
import { TbClipboardList } from 'react-icons/tb'
import { BsList } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { Container } from './styles'
import logoIcon from '../../assets/Polygon.png'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'

export function HeaderMobile() {
  return (
    <Container> 
      <div className="body">
        <div className="list" onClick={() => console.log('test')}>
          <BsList size={30} fill="white" />
        </div>
        <div className="listClickedHide">
          <ButtonText title="Favorites" />
          <ButtonText title="Logout" />
        </div>
        <div className="projectLogo">
          <img src={logoIcon} alt="" />
          <h1>Food Explorer</h1>
        </div>
        <div className="search">
          <FiSearch size={25} color="white"/>
        </div>       
      </div>     
      <div className="inputSearchClicked">
          <Input
            type="text"
            placeholder="Search for plate options"
            icon={FiSearch}
          />
      </div> 
    </Container>
  );
};
