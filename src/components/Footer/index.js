import { Container } from './styles';

export default function Footer() {
  return(
    <Container>
      <div className="info-content">
        <h1>Endereço</h1>
        <p>
          Av. Margarita, 2660 - Nova Cidade<br />
          69097-305, Manaus/Am
        </p>
      </div>

      <div className="info-content">
        <h1>Entre em Contato</h1>
        <p>email@email.com.br</p>
        <p>0800 800 800</p>
        <p>(92) 9 9999-9999</p>
      </div>

      <div className="info-content">
        <h1>Distek</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa
        </p>
      </div>
    </Container>
  );
}
