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

    > p {
      font-weight: 400;
    }

    > p:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
