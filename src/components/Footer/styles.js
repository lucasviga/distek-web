import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #58187D;
  color: #FFF;
  padding: 5rem;
  height: 100vh;

  @media (min-width: 700px) {
    height: 50%;
    padding: 8rem 5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));

  .info-content {
    > h1 {
      font-weight: 500;
      margin-bottom: 1rem;
    }

    a, p {
      font-weight: 400;
      color: #FFF;
      transition: opacity .5s ease-out;
    }

    a > p:hover {
      opacity: 0.6;
    }

    a > p {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Direitos = styled.div`
  background-color: #58187D;
  padding: 2rem 5rem;

  p {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
