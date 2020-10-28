import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo-distek.svg';
import { Container } from './styles';

function Menu(){
  return(
    <Container>
      <div id="myHeader" className="menu">
        <div className="menu__content">
          <a href="/">
            <img src={logo} alt="Distek" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="/residencial">Produtos</a>
              </li>

              <li>
                <a href="/empresarial">Marcas</a>
              </li>

              <li>
                <a href="/onde-estamos">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Menu;
