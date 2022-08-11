import React from "react";
import { Feed } from "../E__exports";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <section className="container mainSection">
      <h1 className="title">{username}</h1>
      <Feed user={username} />
    </section>
  );
};

export default UserProfile;
