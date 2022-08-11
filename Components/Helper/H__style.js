import styled from "styled-components";

export const ErrorParagraph = styled.p`
  color: #f31;
  margin: 1rem 0;
`;

export const Wrapper = styled.div`
  display: grid;

  img {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: all 0.2s;
  }

  div {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

export const LoadingBone = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;

  div {
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    padding-left: 5px;
    background: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

export const ProtectSection = styled.section`

  @media (max-width: 60rem) {
    margin: 10%;
  }
`