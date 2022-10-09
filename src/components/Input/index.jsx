import { Container } from './styles';

export function Input({ icon: Icon, img: Img, readonly, onchange, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={18} color="#7C7C8A"/>}
      <input readOnly={readonly} onChange={onchange} {...rest}/>
      {Img && <Img size={15}/>}
    </Container>
  );
};