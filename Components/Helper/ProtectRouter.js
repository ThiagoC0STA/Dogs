import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../Contexts/UserContext";
import { ProtectSection } from "./H__style";

const ProtectRouter = ({ children }) => {
  const { login } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    login ? children : router.push("/login");
  }, [children, login, router]);

  return <ProtectSection>{children}</ProtectSection>;
};

export default ProtectRouter;
