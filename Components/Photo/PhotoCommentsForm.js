import React, { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../pages/api/Api";
import { Enviar } from "../../public/Assets/E__assets";
import Error from "../Helper/Error";
import { MakeComment } from "./P__style";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <MakeComment onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comment..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </MakeComment>
  );
};

export default PhotoCommentsForm;
