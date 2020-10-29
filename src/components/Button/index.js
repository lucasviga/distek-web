import { Container } from './styles';


function Button({ children, title }) {
  return(
    <Container href={title}>
      {children}
    </Container>
  );
}

export default Button;
