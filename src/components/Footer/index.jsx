import { Container } from './styles';

import logoIcon from '../../assets/logoIconGray.png';

export function Footer() {
  return (
    <Container>
      <div className="footerContent">
        <div className="projectLogo">
          <img src={logoIcon} alt="" />
          <h1>Food Explorer</h1>
        </div>
        <p>
          Copyright © 2022 Henrique da Fonte. All rights reserved.
        </p>
      </div>
    </Container>
  );
};