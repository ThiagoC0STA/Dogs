import styled from "styled-components";
import { Login } from "../public/Assets/E__assets";

export const DogsDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);

  main {
    flex: 1;
  }
`;

export const LoginRegister = styled.section`
  form {
    margin-bottom: 2rem;
  }

  a:nth-child(3) {
    display: block;
    color: #666;
    padding: 0.5rem;
    line-height: 1;
    max-width: fit-content;

    :after {
      content: "";
      height: 2px;
      width: 100%;
      background-color: currentColor;
      display: block;
    }
  }

  div {
    margin-top: 4rem;

    p {
      margin: 2rem 0 2rem 0;
    }

    h2 {
      font-family: var(--type-second);
      line-height: 1;
      font-size: 2rem;

      :after {
        content: "";
        display: block;
        background-color: #ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem;
      }
    }
  }

  a:nth-child(5) {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    transition: all 0.2s;

    :hover,
    :focus {
      outline: none;
      box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    :disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }
`;

export const LoginSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  ::before {
    display: block;
    content: "";
    background: url(${Login.src}) no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    ::before {
      display: none;
    }

    .form {
      max-width: 100%;
    }
  }
`;

export const UserPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }

  .file {
    margin-bottom: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewImage = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  ::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
