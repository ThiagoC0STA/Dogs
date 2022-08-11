import React, { useContext } from "react";
import Link from "next/link";
import { LoginRegister } from "../../styles/PagesStyles";
import useForm from "../../Hooks/useForm";
import { Button, Input, Error } from "../../Components/E__exports";
import { UserContext } from "../../Contexts/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <LoginRegister>
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Log in</Button>
        )}
        <Error error={error} />
      </form>
      <Link href="/login/passwordLost">Lost a password?</Link>
      <div>
        <h2>Register</h2>
        <p>Don&apos;t have an account yet? Register on the website.</p>
      </div>
      <Link href="/login/create">Registration</Link>
    </LoginRegister>
  );
};

export default LoginForm;
