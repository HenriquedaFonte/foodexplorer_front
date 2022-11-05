import { useState } from 'react';
import { FiLock, FiAtSign } from 'react-icons/fi';

import { Container, Form } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import  logoIcon  from '../../assets/Polygon.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';



export function SignIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    signIn({ email, password });
  };

  const [typeInput, setTypeInput] = useState("password");
  const [classButton, setClassButton] = useState("hidePassword");
  function ToggleTypeInput() {
    if (typeInput === "password") {
      setTypeInput("text");
      setClassButton("showPassword");
    } else {
      setTypeInput("password");
      setClassButton("hidePassword");
    };
  };

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
          placeholder="email@email.com"
          icon={FiAtSign}
          onChange={e => setEmail(e.target.value.toLowerCase())}
        />
        <p>Password</p>
        <div className="inputPassword">
          <Input 
            type={typeInput} 
            placeholder="Password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" id="btnPassword" className={classButton} onClick={ToggleTypeInput}/>
        </div>
        <Button 
          id='login'
          title="Login"
          onClick={handleSignIn} 
        />
        <ButtonText 
          title="Sign Up"
          onClick={() => navigate('/SignUp')}
        />
      </Form>
    </Container>
  );
};