import React from 'react'
import { LoginButton } from "./B__style";

const Button = ({ children, ...props }) => {
  return (
    <LoginButton {...props}>{children}</LoginButton>
  )
}

export default Button