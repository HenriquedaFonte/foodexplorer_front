import { FiLock, FiMail } from 'react-icons/fi';

import { Container, Form } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import  logoIcon  from '../../assets/Polygon.png';



export function SignIn() {
  return(
    <Container> 
      <div className="projectLogo">
        <img src={logoIcon} alt="" />
        <h1>Food Explorer</h1>
      </div>     
      <Form>
        <h1>Login</h1>
        <p>Email</p>
        <Input 
          type="text"
          placeholder="Example: email@email.com"
          icon={FiMail}
        />
        <p>Password</p>
        <Input 
          type
          placeholder="Minimum 6 characters"
          icon={FiLock}
        />
        <Button 
          title="Login" 
        />
        <ButtonText 
          title="Sign Up"
        />
      </Form>
    </Container>
  );
};