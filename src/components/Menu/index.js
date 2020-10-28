// import { Link } from 'react-router-dom';

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
                <a href="#produtos">Produtos</a>
              </li>

              <li>
                <a href="#marcas">Marcas</a>
              </li>

              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Container>
  );
}

export default Menu;
