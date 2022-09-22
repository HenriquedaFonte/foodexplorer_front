
import { Container } from './styles'
import { Header } from '../../components/Header'
import bannerImg from '../../assets/bannerImg.png'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'

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
import { useState } from 'react'


export function Home() {
  const data = [
    {
      category: 'Main Menu',
      products: [
        {
          id: 1,
          favorite: false,
          img: `${shrimpPasta}`,
          name: 'Spaguetti Gambe',
          description: 'Fresh pasta with toast shrimps and pesto.',
          price: 34.97
        },
        {
          id: 2,
          favorite: false,
          img: `${parmaToast}`,
          name: 'Parma Toast',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: 14.97
        },
        {
          id: 3,
          favorite: false,
          img: `${molaSalad}`,
          name: 'Mola Salad',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: 9.97
        },
        {
          id: 4,
          favorite: false,
          img: `${ravanelloSalad}`,
          name: 'Ravanello Salad',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        },
        {
          id: 5,
          favorite: false,
          img: `${ravanelloSalad}`,
          name: 'Ravanello Salad',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        }
      ]
    },
    {
      category: 'Dessert Menu',
      products: [
        {
          id: 6,
          favorite: false,
          img: `${prugnaPie}`,
          name: 'Prugna Pie',
          description: 'Fresh pasta with toast shrimps, pesto and arugula.',
          price: 34.97
        },
        {
          id: 7,
          favorite: false,
          img: `${peachyPastrie}`,
          name: 'Peachy Pastrie',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: 14.97
        },
        {
          id: 8,
          favorite: false,
          img: `${macarons}`,
          name: 'Macarons',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: 9.97
        },
        {
          id: 9,
          favorite: false,
          img: `${damascusCake}`,
          name: 'Damascus Cake',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        },
        {
          id: 10,
          favorite: false,
          img: `${damascusCake}`,
          name: 'Damascus Cake',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        }
      ]
    },
    {
      category: 'Drinks',
      products: [
        {
          id: 11,
          favorite: false,
          img: `${passionFruitDrink}`,
          name: 'Spaguetti Gambe',
          description: 'Fresh pasta with toast shrimps, pesto and arugula.',
          price: 34.97
        },
        {
          id: 12,
          favorite: false,
          img: `${espresso}`,
          name: 'Espresso',
          description: 'Parma ham and arugula in a naturally leavened bread.',
          price: 14.97
        },
        {
          id: 13,
          favorite: false,
          img: `${teDAutunno}`,
          name: 'Tè d Autunno',
          description:
            'Tomatoes, cilantro, cucumber, red onion. Fresh and seasoned.',
          price: 9.97
        },
        {
          id: 14,
          favorite: false,
          img: `${pomoBourbon}`,
          name: 'Pomo Bourbon',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        },
        {
          id: 15,
          favorite: false,
          img: `${pomoBourbon}`,
          name: 'Pomo Bourbon',
          description:
            'Radishes, greens and sweet and sour sauce sprinkled with sesame',
          price: 23.97
        }
      ]
    }
  ];  
  
  let favoriteList = [];
  let cartProductsList = [];

  function handleSetfavorites(id) {

    if(favoriteList.includes(id)) {
      favoriteList = (favoriteList.filter(favoriteId => favoriteId !== id));
    }else {
      favoriteList =([...favoriteList, id]);       
    };
    addLocalStorageFavorites()
  };
  
  function addLocalStorageFavorites() {
    localStorage.setItem('@foodexplorer:favorites', JSON.stringify(favoriteList));
  };

  function handleSetCart(cartProduct){
    if(cartProductsList.includes(cartProduct.id)) {
      cartProductsList = (cartProductsList.filter(cartproductId => cartproductId !== id));
    }else {
      cartProductsList =([...cartProductsList, cartProduct]);       
    };
    addLocalStorageCart()
    console.log('primeiro cartlist', cartProductsList);
    console.log('cartproduct id',cartProduct.id);
  };

  console.log('segundocart list' , cartProductsList);
  
  function addLocalStorageCart() {
    localStorage.setItem('@foodexplorer:cartProductsList', JSON.stringify(cartProductsList));
  };
    console.log(cartProductsList);


  return (
    <Container>
      <Header />
      <div className='homeContent'>
        <div className='banner'>
          <img src={bannerImg} />
          <div className='textBanner'>
            <h1>Incredible flavors</h1>
            <p>Highly selected ingredients</p>
          </div>
        </div>
        <div className='section'>
          {data.map(({ category, products }) => (
            <Section 
              key={category} 
              category={category} 
              products={products} 
              onSetFavorites={handleSetfavorites}   
              onSetCart={handleSetCart}         
            />
          ))};
        </div>
      </div>
      <Footer />
    </Container>
  );
};
