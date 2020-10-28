import { FaPhoneAlt } from 'react-icons/fa';
import { Container } from './styles';

function MenuHeader() {
  return(
    <Container>
      <p>Horário de Funcionamento: Segunda à Sexta: 09h às 17:30h</p>

      <div className="info-contato">
        <a href="https://facebook.com">
          <FaPhoneAlt color="#0A1D3D" />0800 800 800
        </a>

        <a href="https://facebook.com">
          <FaPhoneAlt color="#0A1D3D" />0800 800 800
        </a>

        <a href="https://facebook.com">
          <FaPhoneAlt color="#0A1D3D" />0800 800 800
        </a>
      </div>
    </Container>
  );
}

export default MenuHeader;
