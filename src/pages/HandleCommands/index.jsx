import { Container } from './styles';
import { useState, useEffect } from 'react'

import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';

export function HandleCommands() {

const status = [
  {
    fill:"#fb0a0a",
    situation: "Pending"
  },
  {
    fill:"#ebfb0a",
    situation: "Preparing"
  },
  {
    fill:"#12fb0a",
    situation: "Delivered"
  }
]

const [cartProductsList, setCardProductsList] = useState([]);

useEffect(() => {
  const cartProductsListLocal = JSON.parse(localStorage.getItem('@foodexplorer:cartProductsListBeforeClean'));
  if(cartProductsListLocal){
    setCardProductsList(cartProductsListLocal);
  };
},[]);


  return (
    <Container>
      <HeaderAdmin />
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
                <select>
                  {status.map((status, index) => (
                    <option id='status' key={index}>
                      {status.situation}
                    </option>
                  ))}
                </select>
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
  )
}