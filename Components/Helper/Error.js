import React from "react";
import { ErrorParagraph } from "./H__style";

const Error = ({ error }) => {
  if (!error) return null;
  return <ErrorParagraph>{error}</ErrorParagraph>;
};

export default Error;
