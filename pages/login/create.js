import React, { useContext } from "react";
import { LoginRegister, LoginSection } from "../../styles/PagesStyles";
import { Input, Button, Error } from "../../Components/E__exports";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../api/Api";
import { UserContext } from "../../Contexts/UserContext";
import useFetch from "../../Hooks/useFetch";

const Create = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <LoginSection>
      <LoginRegister className="form leftAnimation">
        <h1 className="title">Registration</h1>
        <form onSubmit={handleSubmit}>
          <Input label="User" type="text" name="username" {...username} />
          <Input label="Email" type="email" name="email" {...email} />
          <Input
            label="Password"
            type="password"
            name="password"
            {...password}
          />
          {loading ? (
            <Button disabled>Registering...</Button>
          ) : (
            <Button>Register</Button>
          )}

          <Error error={error} />
        </form>
      </LoginRegister>
    </LoginSection>
  );
};

export default Create;
