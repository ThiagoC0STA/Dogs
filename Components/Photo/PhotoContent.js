/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { PhotoComments, ImageRendering } from "../E__exports";
import PhotoDelete from "./PhotoDelete";
import { PhotoContentDiv } from "./P__style";

const PhotoContent = ({ data, single }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
      <PhotoContentDiv className={`${single ? "singlePhoto" : ""}`}>
        <div>
          <ImageRendering src={photo.src} alt={photo.title} />
        </div>
        <div>
          <section>
            <p>
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link
                  href={`/profile/${photo.author}`}
                >{`@${photo.author}`}</Link>
              )}

              <span>{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link href={`/photo/${photo.id}`}>{photo.title}</Link>
            </h1>

            <ul className="attributes">
              <li>{photo.peso} kg</li>
              <li>
                {photo.idade} {photo.idade === 1 ? "year" : "years"}
              </li>
            </ul>
          </section>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </PhotoContentDiv>
  );
};

export default PhotoContent;
