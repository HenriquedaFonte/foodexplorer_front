import { useNavigate, useParams } from 'react-router-dom'; 

import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Container } from './styles';
import { Footer } from '../../components/Footer';
import lettuce from '../../assets/lettuce.png'
import lemon from '../../assets/lemon.png'
import radish from '../../assets/radish.png'
import shrimpPasta from '../../assets/food2.png'
import parmaToast from '../../assets/food1.png'
import molaSalad from '../../assets/food4.png'
import ravanelloSalad from '../../assets/food3.png'
import prugnaPie from '../../assets/dessert1.png'
import peachyPastrie from '../../assets/dessert2.png'
import macarons from '../../assets/dessert3.png'
import damascusCake from '../../assets/dessert4.png'
import passionFruitDrink from '../../assets/drink1.png'
import teDAutunno from '../../assets/drink2.png'
import espresso from '../../assets/drink3.png'
import pomoBourbon from '../../assets/drink4.png'

export function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();

  const data = [
    {
      id: 1,
      favorite: false,
      img: `${shrimpPasta}`,
      name: 'Spaguetti Gambe',
      description: 'Fresh pasta with toast shrimps and pesto.',
      price: '34.97$'
    },
    {
      id: 2,
      favorite: false,
      img: `${parmaToast}`,
      name: 'Parma Toast',
      description: 'Parma ham and arugula in a naturally leavened bread.',
      price: '14.97$'
    },
    {
      id: 3,
      favorite: false,
      img: `${molaSalad}`,
      name: 'Mola Salad',
      description:
        'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
      price: '9.97$'
    },
    {
      id: 4,
      favorite: false,
      img: `${ravanelloSalad}`,
      name: 'Ravanello Salad',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    },
    {
      id: 5,
      favorite: false,
      img: `${ravanelloSalad}`,
      name: 'Ravanello Salad',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    },
    {
      id: 6,
      favorite: false,
      img: `${prugnaPie}`,
      name: 'Prugna Pie',
      description: 'Fresh pasta with toast shrimps, pesto and arugula.',
      price: '34.97$'
    },
    {
      id: 7,
      favorite: false,
      img: `${peachyPastrie}`,
      name: 'Peachy Pastrie',
      description: 'Parma ham and arugula in a naturally leavened bread.',
      price: '14.97$'
    },
    {
      id: 8,
      favorite: false,
      img: `${macarons}`,
      name: 'Macarons',
      description:
        'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
      price: '9.97$'
    },
    {
      id: 9,
      favorite: false,
      img: `${damascusCake}`,
      name: 'Damascus Cake',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    },
    {
      id: 10,
      favorite: false,
      img: `${damascusCake}`,
      name: 'Damascus Cake',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    },
    {
      id: 11,
      favorite: false,
      img: `${passionFruitDrink}`,
      name: 'Spaguetti Gambe',
      description: 'Fresh pasta with toast shrimps, pesto and arugula.',
      price: '34.97$'
    },
    {
      id: 12,
      favorite: false,
      img: `${espresso}`,
      name: 'Espresso',
      description: 'Parma ham and arugula in a naturally leavened bread.',
      price: '14.97$'
    },
    {
      id: 13,
      favorite: false,
      img: `${teDAutunno}`,
      name: 'Tè d Autunno',
      description:
        'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
      price: '9.97$'
    },
    {
      id: 14,
      favorite: false,
      img: `${pomoBourbon}`,
      name: 'Pomo Bourbon',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    },
    {
      id: 15,
      favorite: false,
      img: `${pomoBourbon}`,
      name: 'Pomo Bourbon',
      description:
        'Radishes, greens and sweet and sour sauce sprinkled with sesame',
      price: '23.97$'
    }
  ];

  const newData = data.find(dish => dish.id == params.id);

  return (
    <Container>
      <Header />
      <div className="buttonBack">
        <ButtonText
          title="Back"
          icon={IoIosArrowBack}
          id="buttonBack"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="productDetailContainer">
        <div className="productDetailImage">
          <img src={newData.img} />
        </div>
        <div className="productDetailDescription">
          <h1>{newData.name}</h1>
          <p>{newData.description}</p>
          <div className="productDetailIngredients">
            <div className="igredients">
              <div className="image">
                <img src={lettuce} />
              </div>
              <p>Letuce</p>
            </div>
            <div className="igredients">
              <div className="image">
                <img src={radish} />
              </div>
              <p>Radish</p>
            </div>
            <div className="igredients">
              <div className="image">
                <img src={lemon} />
              </div>
              <p>Lemon</p>
            </div>
          </div>
          <div className="productDetailinfo">
            <h2>{newData.price}</h2>
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