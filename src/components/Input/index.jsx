import { Container } from './styles';

export function Input({ icon: Icon, img: Img, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={15} color="#7C7C8A"/>}
      <input {...rest}/>
      {Img && <Img size={15}/>}
    </Container>
  );
};