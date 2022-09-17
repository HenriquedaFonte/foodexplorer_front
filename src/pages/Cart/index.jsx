import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { AiOutlineCreditCard, AiOutlineDollar } from 'react-icons/ai';

import { Container, Form } from './styles';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { CartItem } from '../../components/CartItem';
import shrimpPasta from '../../assets/food2.png'
import qrCode from '../../assets/qrCode.svg'
import { useState } from 'react';
import { Button } from '../../components/Button';

export function Cart() {
  const [isSelected, setIsSelected] = useState(true);
  const cartProducts = [
    {
      img:`${shrimpPasta}`,
      qtd: 1,
      name: 'ShrimpPasta',
      price: 25.97      
    },
    {
      img:`${shrimpPasta}`,
      qtd: 1,
      name: 'ShrimpPasta',
      price: 25.97      
    },    {
      img:`${shrimpPasta}`,
      qtd: 1,
      name: 'ShrimpPasta',
      price: 25.97      
    },
    {
      img:`${shrimpPasta}`,
      qtd: 1,
      name: 'ShrimpPasta',
      price: 25.97      
    }
  ];

  let valueTotal = 0;
  for (let product of cartProducts) {
    valueTotal = valueTotal + product.qtd * product.price;
  };

  
  return (
    <Container>
      <Header/>
      <div className='content'>
        <div className='command'>
          <h1>My Command</h1>
          <SimpleBar
            forceVisible='y'
            autoHide={false}
            style={{ maxHeight: 400, maxWidth: 444 }}
          >
            {cartProducts.map((item, index) => (
              <CartItem items={item} key={index}/>
            ))}

          </SimpleBar>
          <h3>Total: {valueTotal}$ </h3>
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
                        placeholder='04/25'
                      />
                    </div>
                  </div>
                  <Button title='Payment'/>
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