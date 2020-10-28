import styled from 'styled-components';

export const Container = styled.header`
  .fixed {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  .menu {
    height: 7rem;
    background: #FFF;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

    @include respond(tab-port) {
      display:none;
    }

    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      margin: 0 2.5rem;

      img {
        height: 5rem;
      }
    }

    nav ul {
      display: flex;
      flex-direction: row;

      a {
        color: #444343;

        &:hover {
          cursor: pointer;
          color: #58187D;
        }
      }

      li {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        font-weight: 400;
        transition: all 0.1s cubic-bezier(0.42, 0, 0.35, 0.78);
        color: #444343;

        > a {
          display: flex;
          align-items: center;
        }

        &:hover {
          cursor: pointer;
          color: #58187D;
        }

        &:not(:last-child) {
          margin-right: 3rem;
        }
      }

      i {
        font-size: 2.3rem;
      }
    }
  }

  .nav-link {
    &:link,
    &:visited {
      text-decoration: none;
      color: $color-dark;
    }

    &:hover {
      cursor: pointer;
      color: #58187D;
    }
  }
`;
