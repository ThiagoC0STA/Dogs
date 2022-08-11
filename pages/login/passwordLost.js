import React from "react";
import { Input, Button, Error } from "../../Components/E__exports";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { LoginSection } from "../../styles/PagesStyles";
import { PASSWORD_LOST } from "../api/Api";

const Passwordlost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);
    }
  }

  return (
    <LoginSection>
      <section className="form leftAnimation" style={{ marginTop: "15vh" }}>
        <h1 className="title">Lost the password?</h1>
        {data ? (
          <p style={{ color: "#4c1" }}>{data}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / User" type="text" name="login" {...login} />
            {loading ? (
              <Button disabled>Sending...</Button>
            ) : (
              <Button>Send email</Button>
            )}
            <Error error={error} />
          </form>
        )}
      </section>
    </LoginSection>
  );
};

export default Passwordlost;
