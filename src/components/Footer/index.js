import { Container, Direitos } from './styles';

export default function Footer() {

  const getYearCurrent = new Date();
  const year = getYearCurrent.getFullYear();

  return(
    <>
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
          <a href="mailto:comercial@distek.com.br"><p>comercial@distek.com.br</p></a>
          <a href="tel:9231991001"><p>(92) 3199-1001</p></a>
        </div>

        <div className="info-content">
          <h1>Distek</h1>
          <p>Distribuidora de Tecnologia.</p>
        </div>
      </Container>
      <Direitos>
        <p>Todos os direitos reservados &copy; {year}. Distek - Distribuidora de Tecnologia.</p>
      </Direitos>
    </>
  );
}
