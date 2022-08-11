import React, { useContext } from "react";
import { User, ProtectRouter, Feed } from "../../Components/E__exports";
import { UserContext } from "../../Contexts/UserContext";

const Account = () => {
  const { data } = useContext(UserContext);

  return (
    <ProtectRouter>
      <User />
      <section className="container mainSection">
        <Feed user={data ? data.id : "0"} />
      </section>
    </ProtectRouter>
  );
};

export default Account;
