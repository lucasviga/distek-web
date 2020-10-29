import styled from 'styled-components';

import bgTech from '../../assets/img/bg-tech.jpg'
import imgContato from '../../assets/img/pic-contato.jpg';
import bgProduto01 from '../../assets/img/bg-produto-01.jpg';

export const Marcas = styled.section`
  height: 90%;
  background-image: linear-gradient(
    to bottom, rgba(255, 255, 255, 0.5), rgba(242, 242, 242, 0.95)),url(${bgTech});

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1 {
    width: 60%;
    color: #0A1D3D;
    font-size: 6rem;
    text-align: center;
    font-weight: 400;

    @media (max-width: 37.5em) {
      font-size: 2.8rem;
      width: 100%;
    }

    @media (max-width: 56.25em) {
      font-size: 4rem;
      width: 100%;
    }
  }
`;

export const BannerContato = styled.section`
  background-image: linear-gradient(
    to bottom, rgba(51, 51, 51, 0.80), rgba(88, 24, 125, 1)),url(${imgContato});
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .highlight-text {
    background: #fff;
    color: #444343;
    font-weight: 400;
    margin: 3rem;
  }

  .banner-contato {
    text-align: center;

    > h1 {
      font-size: 5rem;
      color: #FFF;
      padding: 5rem;

      @media (max-width: 37.5em) {
        font-size: 2.5rem;
      }

      @media (max-width: 56.25em) {
        font-size: 3.5rem;
      }
    }

    &__btn-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      @media (max-width: 37.5em) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > a {
          margin-bottom: 2.5rem;
        }
      }
    }
  }

  .redes-sociais-box {
    h1 {
      color: #fff;
      text-align: center;
      font-size: 5rem;
      margin: 3rem;

      @media (max-width: 37.5em) {
        font-size: 2.5rem;
      }

      @media (max-width: 56.25em) {
        font-size: 3.5rem;
      }
    }
  }

  .redes-sociais {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .redes-sociais__circle {
    margin-right: 1rem;
  }

  .redes-sociais__circle {
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 1rem;
    padding: 1rem;
    transition: all .5s ease-out;
    color: #58187D;

    &:hover {
      background-color: #491469;
      border: 2px solid #9127CF;

      > svg {
        color: #9127CF;
      }
    }
  }
`;

export const Produtos = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  padding: 5rem;
  margin: 0 auto;

  @media (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 56.25em) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
  }

  @media (min-width: 112.5em) {
    width: 1100px;
  }

  .bg-produto {
    background-image: linear-gradient(
    to bottom, rgba(51, 51, 51, 0.6), rgba(88, 24, 125, 0.5)),url(${bgProduto01});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 40rem;
    border-radius: 1rem;
  }

  .bg-produto:not(:last-child) {
    margin-right: 5rem;

    @media (max-width: 56.25em) {
      margin-right: unset;
      margin-bottom: 5rem;
    }
  }

  .txt-produto {
    position: relative;
    width: 100%;
    height: 100%;

    p {
      margin-bottom: 2.5rem;
      color: #fff;
      font-weight: 500;
      font-size: 3rem;
    }

    &__footer {
      position: absolute;
      bottom: 0;
      margin: 5rem;

      @media (max-width: 56.25em) {
        margin: 2.5rem;
      }
    }
  }
`;
