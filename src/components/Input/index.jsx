import { Container } from './styles';

export function Input({ icon: Icon, img: Img, readonly, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={18} color="#7C7C8A"/>}
      <input readOnly={readonly} {...rest}/>
      {Img && <Img size={15}/>}
    </Container>
  );
};