import { Container } from './styles';

import { FaCircle } from "react-icons/fa";

import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';

export function HandleCommands() {
const commands = [
  {

    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {

    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {

    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  },
  {
    code: "000001",
    details: "1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá",
    madeOn: "05/20 at 18h00"
  }
]

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
          {commands.map(data => (
            <tr>
              <td>
                <select>
                  {status.map(status => (
                    <option id='status'>
                      {status.situation}
                    </option>
                  ))}
                </select>
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