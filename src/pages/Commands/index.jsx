import { Container } from './style';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Commands() {
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
          <tr>
            <td>
              <svg
                width="9" height="9" viewBox="0 0 9 9" fill="none"   xmlns="http://www.w3.org/2000/svg">
                <circle r="4" transform="matrix(1 0 0 -1 4.46118 4.57812)" fill="#04D361"/>
              </svg>
              Pending
            </td>
            <td>000001</td>
            <td>1x salada</td>
            <td>05/20 at 18h00</td>
          </tr>
        </tbody>
      </table>
      </div>
      <Footer className="footer" />
    </Container>
  )
}