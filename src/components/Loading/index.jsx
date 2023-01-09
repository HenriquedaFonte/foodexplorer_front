import { Container } from './styles';
import loading from '../../assets/loading.svg'

export function Loading(){
  return (
    <Container>
      <div>
        <img className='loader' src={loading} alt='loading' />
      </div>
    </Container>
  );
};