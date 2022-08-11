import React, { useContext } from "react";
import Link from "next/link";
import { HeaderDiv } from "./H__style";
import { Dogs } from "../../public/Assets/E__assets";
import { UserContext } from "../../Contexts/UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <HeaderDiv>
      <nav className="container">
        <Link href="/">
          <a aria-label="Dogs  -  Home">
            <Dogs />
          </a>
        </Link>
        {data ? (
          <>
            <Link href="/account">{data.nome}</Link>
          </>
        ) : (
          <Link href="/login">Login / Create</Link>
        )}
      </nav>
    </HeaderDiv>
  );
};

export default Header;
