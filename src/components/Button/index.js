import { Container } from './styles';


function Button({ children, title }) {
  return(
    <Container href={`tel:${title}`}>
      {children}
    </Container>
  );
}

export default Button;
