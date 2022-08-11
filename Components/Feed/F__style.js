import styled from "styled-components";

export const DogsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  li:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  li {
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

    div, span {
      grid-area: 1/1;
    }

    span {
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      font-size: 1rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: none;

      ::before {
        width: 16px;
        height: 10px;
        content: "";
        display: inline-block;
        margin-right: 0.25rem;
        background: url("../../Assets/visualizacao.svg") no-repeat;
      }
    }

    :hover {
      span {
        display: flex;
      }
    }
  }

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);

    li:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`;
