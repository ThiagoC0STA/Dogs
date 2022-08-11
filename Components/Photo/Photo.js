import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET_ID } from "../../pages/api/Api";
import { Error, Loading, PhotoContent } from "../E__exports";

const Photo = () => {
  const { query } = useRouter();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET_ID(query.id);
    request(url, options);
  }, [query.id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
