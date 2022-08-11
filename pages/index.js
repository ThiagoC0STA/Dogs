import React, { useContext } from "react";
import { Feed } from "../Components/E__exports";
import { UserContext } from "../Contexts/UserContext";

const Index = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container mainContainer">
      <Feed user={data ? data : "0"} />
    </section>
  );
};

export default Index;
