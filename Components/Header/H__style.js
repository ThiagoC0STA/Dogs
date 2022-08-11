import styled from "styled-components";

export const HeaderDiv = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  a {
    padding: 0.5rem 0;
  }

  a:nth-child(2) {
    color: #333;
    display: flex;
    align-items: center;
  }

  a:nth-child(2):after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("../../Assets/usuario.svg") no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
