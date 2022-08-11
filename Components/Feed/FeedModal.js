import React, { useEffect } from "react";
import { ModalDiv } from "./F__style";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../pages/api/Api";
import { PhotoContent, Error, Loading } from "../E__exports";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <ModalDiv onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ModalDiv>
  );
};

export default FeedModal;
