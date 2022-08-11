import React, { useEffect, useState } from "react";
import { Button, Error, Input } from "../../Components/E__exports";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { useRouter } from "next/router";
import { LoginSection } from "../../styles/PagesStyles";
import { PASSWORD_RESET } from "../api/Api";

const PasswordReset = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate.push("/login");
    }
  }

  return (
    <LoginSection>
      <section className="leftAnimation" style={{ marginTop: "15vh" }}>
        <h1 className="title">Reset your password</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="New Password"
            type="password"
            name="password"
            {...password}
          />
          {loading ? (
            <Button disabled>Reseting...</Button>
          ) : (
            <Button>Reset</Button>
          )}
        </form>
        <Error error={error} />
      </section>
    </LoginSection>
  );
};

export default PasswordReset;
