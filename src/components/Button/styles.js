import styled from 'styled-components';

export const Container = styled.a`
  background: #C64933;
  color: #FFF;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  text-align: center;
  transition: opacity 0.6s ease-out;

  &:hover {
    opacity: 0.6;
  }

  > svg {
    margin-right: 0.5rem;
  }
`;
