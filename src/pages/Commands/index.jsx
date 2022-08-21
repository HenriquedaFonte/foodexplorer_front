import { Container } from './style';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Commands() {
const commands = [
  {
    fill:"#12fb0a",
    situation: "Delivered",
    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {
    fill:"#ebfb0a",
    situation: "Preparing",
    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {
    fill:"#fb0a0a",
    situation: "Pending",
    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {
    fill:"#fb0a0a",
    situation: "Pending",
    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  }
]

  return (
    <Container>
      <Header />
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
          {commands.map(data => (
            <tr>
              <td>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill={data.fill}/>
                </svg>
                {data.situation}
              </td>
              <td>{data.code}</td>
              <td>{data.details}</td>
              <td>{data.madeOn}</td>
            </tr>
          ))} 
          </tbody>
      </table>
      </div>
      <Footer id="commandFooter"/>
    </Container>
  )
}