import React, { Suspense, useEffect } from "react";
import {
  User,
  ProtectRouter,
  Loading,
  Error,
} from "../../Components/E__exports";
import useFetch from "../../Hooks/useFetch";
import { GET_STATS } from "../api/Api";
import dynamic from "next/dynamic";

const UserStatsGraphs = dynamic(() =>
  import("../../Components/User/UserStatsGraphs", { suspense: true })
);

const Statistics = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <ProtectRouter>
        <User />
        <Suspense fallback={<div></div>}>
          <UserStatsGraphs data={data} />
        </Suspense>
      </ProtectRouter>
    );
  } else return null;
};

export default Statistics;
