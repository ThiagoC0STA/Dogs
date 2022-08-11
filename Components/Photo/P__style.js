import styled from "styled-components";

export const PhotoContentDiv = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: #fff;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleUp 0.3s forwards;

  div:nth-child(1) {
    grid-row: 1/4;
    overflow: hidden;
  }

  div:nth-child(2) {
    padding: 2rem 2rem 0 2rem;

    p {
      opacity: 0.5;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span::before {
        content: "";
        width: 16px;
        display: inline-block;
        height: 10px;
        margin-right: 0.5rem;
        background: url("../../Assets/visualizacao-black.svg");
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }

  .attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    li {
      margin-right: 2rem;

      ::before {
        content: "";
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: #333;
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    div:nth-child(1) {
      grid-row: 1;
    }
  }

  @keyframes scaleUp {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;

export const CommentList = styled.ul`
  overflow-y: auto;
  word-break: break-all;
  padding: 0 2rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

export const MakeComment = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  textarea {
    display: block;
    width: 100%;
    border: none;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;

    :focus,
    :hover {
      outline: none;
      border-color: #fb1;
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    :focus,
    :hover {
      outline: none;
      svg {
        path {
          fill: #fea;
          stroke: #fb1;
        }

        g {
          animation: bark 0.6s infinite;
        }
      }
    }
  }

  @keyframes bark {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DeletePhoto = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;

  :focus,
  :hover {
    outline: none;
    background: #fff;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;
