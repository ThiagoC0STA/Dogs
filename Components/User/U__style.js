import styled from "styled-components";

export const UserHead = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
  position: relative;

  nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    a,
    button {
      background: #eee;
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: all 0.2s;
      cursor: pointer;

      :hover,
      :focus {
        background: #fff;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }

      :active {
        background: #fff;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;

        svg > * {
          fill: #fb1 !important;
        }
      }
    }
  }
`;

export const UserSection = styled.section`
  button:nth-child(1) {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: all 0.2s;
    cursor: pointer;

    ::after {
      content: "";
      display: block;
      width: 1.2rem;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: all 0.2s;
    }

    :focus,
    :hover {
      outline: none;
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
    }
  }

  .mobileButtonActive {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  .mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px !important;
    height: 4px !important;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }

  .navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.7rem 0;
      cursor: pointer;

      :hover {
        box-shadow: none !important;
        border-bottom: 1px solid #eee;

        svg > * {
          fill: #fb1;
        }
      }
    }

    button {
      border-bottom: none !important;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  .navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }

  .navMobileMenu {
  }

  .navPc {
  }
`;

export const GraphsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  div:nth-child(1) {
    grid-column: 1 /3;
    padding: 2rem;
    font-size: 2rem;
  }

  div {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;

    div {
      box-shadow: none;
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    div:nth-child(1) {
      grid-column: 1;
    }
  }
`;
