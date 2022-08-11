import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../pages/api/Api";
import { FeedPhotosItem, Error, Loading } from "../E__exports";
import { DogsList } from "./F__style";

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [page, request, setInfinite, user]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <DogsList className="leftAnimation">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </DogsList>
    );
  } else return null;
};

export default FeedPhotos;
