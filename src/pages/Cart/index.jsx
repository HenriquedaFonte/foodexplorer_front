import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AiOutlineCreditCard, AiOutlineDollar } from 'react-icons/ai';
import { api } from '../../services/api'

import { Container, Form } from './styles';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CartItem } from '../../components/CartItem';
import qrCode from '../../assets/qrCode.svg'
import { useState, useEffect } from 'react';
import { Button } from '../../components/Button';


export function Cart() {
  const [dishes, setDishes] = useState([]);
  const [isSelected, setIsSelected] = useState(true);
  const [cartProductsList, setCardProductsList] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes`);
      setDishes(response.data);
    }
     fetchDishes(); 
  },[]);

  useEffect(() => {
    const cartProductsListLocal = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsList'));
    if(cartProductsListLocal){
      setCardProductsList(cartProductsListLocal);
    };
  },[]);

  function handleRemoveProduct(id) {
    const cartListFiltered = cartProductsList.filter(cartProduct =>{ 

      return cartProduct.id !== id       
    })    
      setCardProductsList(cartListFiltered);
      localStorage.setItem('@foodexplorer:cartProductsList', JSON.stringify(cartListFiltered));
    };

  let valueTotal = 0;
  for (let product of cartProductsList) {
    valueTotal = valueTotal + product.amount * product.price;
  };


  let amount = 0;
  for (let product of cartProductsList) {
    amount = amount + product.amount;
  };


  
  return (
    <Container>
      <Header amount={amount}/>
      <div className='content'>
        <div className='command'>
          <h1>My Command</h1>
          <SimpleBar
            forceVisible='y'
            autoHide={false}
            style={{ maxHeight: 400, maxWidth: 444 }}
          >
            {cartProductsList &&
              cartProductsList.map((product, index) => (
              <CartItem items={product} key={index} onRemoveProduct={handleRemoveProduct}/>
            ))}
          </SimpleBar>
          <h3>Total: {valueTotal.toFixed(2)}$ </h3>
        </div>
        <div className='payment'>
          <h1>Payment</h1>
          <div className='paymentType'>
            <div className='paymentOption'>
              <button 
                className={isSelected ? 'selected' : ''}
                onClick={() => setIsSelected(!isSelected)}
              >
                <AiOutlineDollar/>
                Transfer
              </button>
              <button
                className={!isSelected ? 'selected' : ''}
                onClick={() => setIsSelected(!isSelected)}
              >
                <AiOutlineCreditCard/>
                Credit
              </button>
            </div>
            {isSelected ? (
              <div className='paymentTransfer'>
                <img src={qrCode} alt='QR Code' />
              </div>
            ) : (
              <div className='paymentCart'>
                <Form>
                <div className='inputLabelPosition'>
                    <label 
                      htmlFor='cardNumber'         
                    >
                      Card Number:
                    </label>
                    <input 
                      type='number'
                      id='cardNumber'
                      placeholder='0000 0000 0000 0000'
                    />
                  </div>
                  <div className="cardData">
                    <div className='inputLabelPosition'>
                      <label 
                        htmlFor='cardDate'         
                      >
                        Valid Thru:
                      </label>
                      <input 
                        type='text'
                        id='cardDate'
                        placeholder='04/25'
                      />
                    </div>
                    <div className='inputLabelPosition'>
                      <label 
                        htmlFor='cardCvc'          
                      >
                        CVC:
                      </label>
                      <input 
                        type='text'
                        id='cardCvc'
                        placeholder='123'
                      />
                    </div>
                  </div>
                  <Button 
                    title='Payment'
                    // onClick={cleanCart}
                  />
                </Form>
              </div>
            )};
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  );
};