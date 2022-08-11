import React from "react";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../pages/api/Api";
import { DeletePhoto } from "./P__style";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm(
      "Are you sure you want to delete the photo?"
    );
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <DeletePhoto disabled>Deleting</DeletePhoto>
      ) : (
        <DeletePhoto onClick={handleClick}>Delete</DeletePhoto>
      )}
    </>
  );
};

export default PhotoDelete;
