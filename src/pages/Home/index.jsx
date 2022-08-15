import { Header } from '../../components/Header';
import { HeaderMobile } from '../../components/HeaderMobile';
import { Container } from './styles';
import bannerImg from '../../assets/bannerImg.png';
import { SectionMain } from '../../components/SectionMain';

export function Home() {
  return(
    <Container>
      <Header/>      
        <div className="banner">
          <img src={bannerImg} />
          <div className="textBanner">
            <h1>Incredible flavors</h1>
            <p>Highly selected ingredients</p>
          </div>
        </div> 
          <SectionMain />        
    </Container>
  );
};