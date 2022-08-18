import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Footer } from '../../components/Footer';
import ravanelloSalad from '../../assets/food3.png'
import lettuce from '../../assets/lettuce.png'
import lemon from '../../assets/lemon.png'

export function ProductDetail(product) {
  return (
    <Container>
      <Header />
      <div className="productDetailContainer">
        <div className="productDetailImage">
          <ButtonText
            title="Back"
            icon={IoIosArrowBack}
            id="productDetailBack"
          />
          <img src={ravanelloSalad} />
        </div>
        <div className="productDetailDescription">
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="productDetailIngredients">
            <div className="igredients">
              <img src={lettuce} />
              <p>Letuce</p>
            </div>
            <div className="igredients">
              <img src={lemon} />
              <p>Lemon</p>
            </div>
          </div>
          <div className="productDetailinfo">
            <h2>R$ 25,97</h2>
            <div className="productDetailstepper">
              <BiMinus size={25} color="white" />
              <strong>01</strong>
              <BiPlus size={25} color="white" />
            </div>
            <Button id="addFood" title="Add" />
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </Container>
  )
};