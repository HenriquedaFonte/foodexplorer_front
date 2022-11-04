import { Container } from './styles';

import { useState, useEffect } from 'react'

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Commands() {

const [cartProductsList, setCardProductsList] = useState([]);


useEffect(() => {
  const cartProductsListLocal = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsListBeforeClean'));
  if(cartProductsListLocal){
    setCardProductsList(cartProductsListLocal);
  };
},[]);


let valueTotal = 0;
for (let product of cartProductsList) {
  valueTotal = valueTotal + product.amount * product.price;
};

  return (
    <Container>
      <Header amount='0'/>
      <div className="commandsConteiner">
        <h1>Commands</h1>
        <table>
          <thead>
            <tr>
              <th className="status">Status</th>
              <th className="code">Code</th>
              <th className="details">Details</th>
              <th className="madeOn">Made on</th>
            </tr>
          </thead>
          <tbody>                     
          {cartProductsList.map((data, index) => (
            <tr key={index}>
              <td>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#fb0a0a"/>
                </svg>
                Pending
              </td>
              <td>{index}</td>
              <td>{data.amount} x {data.name}</td>
              <td>05/20 at 18h00</td>
            </tr>
          ))} 
          </tbody>
      </table>
      </div>
      <Footer id="commandFooter"/>
    </Container>
  );
};