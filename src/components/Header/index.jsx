import { FiSearch, FiClipboard } from 'react-icons/fi'
import { TbClipboardList } from 'react-icons/tb'
import { BsList } from 'react-icons/bs'
import { MdLogout } from 'react-icons/md'
import { Container } from './styles'
import logoIcon from '../../assets/Polygon.png'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <div className="headerContent">  
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
        <button id="command">
          <TbClipboardList size={18} />
          My command
        </button>
        <div className="logOut" onClick={() => console.log('test')}>
          <MdLogout size={30} fill="white" />
        </div>  
      </div>    
    </Container>
  )
}
