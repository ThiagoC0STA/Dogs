/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageRendering } from "../E__exports";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick}>
      <ImageRendering src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
