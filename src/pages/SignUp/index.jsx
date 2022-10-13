import { useState } from 'react';
import { FiLock, FiAtSign, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./styles";

import { api } from '../../services/api';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import  logoIcon  from '../../assets/Polygon.png';



export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function HandleSignUp() {
    if(!name || !email || !password) {
      return alert('Please enter your name, email and password');
    };

    if(password.length < 6) {
      return alert('Password must be 6 or more characters!');
    };

    api.post('/users', { name, email, password })
    .then(() => {
      alert('User has been registered!');
      navigate('/');
    })
    .catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('User registration error!');
      };
    });
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
        <h1>Create account</h1>
        <p>Name</p>
        <Input 
          type="text"
          placeholder="Your name"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <p>Email</p>
        <Input 
          type="text"
          placeholder="email@email.com"
          icon={FiAtSign}
          onChange={e => setEmail(e.target.value)}
        />
        <p>Password</p>
        <div className="inputPassword">
          <Input 
            type={typeInput} 
            placeholder="Minimum 6 characters"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="button" id="btnPassword" className={classButton} onClick={ToggleTypeInput}/>
        </div>
        <Button 
          id='signUp'
          title="SingUp" 
          onClick={HandleSignUp}
        />
        <ButtonText 
          title="I already have an account"
          onClick={() => navigate('/')}
        />
      </Form>
    </Container>
  );
};