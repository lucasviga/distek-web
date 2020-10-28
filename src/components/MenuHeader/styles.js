import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  padding: 0 1rem;

  background-color: #F8F8F8;
  color: #0A1D3D;
  /* position: fixed; */
  width: 100%;

  p {
    font-size: 1.2rem;
  }

  .info-contato {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

    a:not(:last-child) {
      margin-right: 1rem;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #0A1D3D;

      > svg {
        margin-right: 0.5rem;
      }
    }

    a:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
