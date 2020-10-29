import { Container } from './styles';

export default function Footer() {
  return(
    <Container>
      <div className="info-content">
        <h1>Endereço</h1>
        <p>
          Av. Camapuã, 2486B - Conj. Amazonino Mendes<br />
          Novo Aleixo, CEP: 69099-028
        </p>
      </div>

      <div className="info-content">
        <h1>Entre em Contato</h1>
        <p>comercial@distek.com.br</p>
        <p>(92) 3199-1001</p>
      </div>

      <div className="info-content">
        <h1>Distek</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa
        </p>
      </div>
    </Container>
  );
}
