import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../../Contexts/UserContext";
import {
  Feed,
  Estatisticas,
  Adicionar,
  Sair,
} from "../../public/Assets/E__assets";
import useMedia from "../../Hooks/useMedia";
import { UserSection } from "./U__style";
import { useRouter } from "next/router";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <UserSection>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${mobileMenu && "mobileButtonActive"}`}
        ></button>
      )}
      <nav
        className={`${mobile ? "navMobile" : "navPc"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
        <Link href="/account">
          <a>
            <Feed />
            {mobile && "My photos"}
          </a>
        </Link>
        <Link href="/account/statistics">
          <a>
            <Estatisticas />
            {mobile && "Statistics"}
          </a>
        </Link>
        <Link href="/account/post">
          <a>
            <Adicionar />
            {mobile && "Add a photo"}
          </a>
        </Link>
        <button onClick={userLogout}>
          <a>
            <Sair />
            {mobile && "Log out"}
          </a>
        </button>
      </nav>
    </UserSection>
  );
};

export default UserHeaderNav;
