import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { UserHeaderNav } from "../E__exports";
import { UserHead } from "./U__style";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useRouter();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/account/post":
        setTitle("Post your photo");
        break;
      case "/account/statistics":
        setTitle("Statistics");
        break;
      default:
        setTitle("My account");
    }
  }, [location]);

  return (
    <UserHead>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </UserHead>
  );
};

export default UserHeader;
