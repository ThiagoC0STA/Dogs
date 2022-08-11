import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useRouter } from "next/router";
import { LoginSection } from "../../styles/PagesStyles";
import { LoginForm } from "../../Components/E__exports";

const Login = () => {
  const { login } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (login) router.push("/account");
  }, [login, router]);

  return (
    <LoginSection>
      <div className="form leftAnimation">
        <LoginForm />
      </div>
    </LoginSection>
  );
};

export default Login;
