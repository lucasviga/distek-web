import { FaPhoneAlt } from 'react-icons/fa';
import { Container } from './styles';

function MenuHeader() {
  return(
    <Container>
      <p>Horário de Funcionamento: Segunda à Sexta: 08h às 17:30h</p>

      <div className="info-contato">
        <a href="tel:923199-1001">
          <FaPhoneAlt color="#0A1D3D" />(92) 3199-1001
        </a>
      </div>
    </Container>
  );
}

export default MenuHeader;
