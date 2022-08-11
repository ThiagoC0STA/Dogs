import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  User,
  Error,
  ProtectRouter,
} from "../../Components/E__exports";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { PreviewImage, UserPost } from "../../styles/PagesStyles";
import { PHOTO_POST } from "../api/Api";

const Post = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useRouter();

  useEffect(() => {
    if (data) navigate.push("/account");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <ProtectRouter>
      <User />
      <UserPost className="leftAnimation container">
        <form onSubmit={handleSubmit}>
          <Input label="Name" type="text" name="nome" {...nome} />
          <Input label="Weight" type="number" name="peso" {...peso} />
          <Input label="Age" type="number" name="idade" {...idade} />
          <input
            className="file"
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send</Button>
          )}
          <Error error={error} />
        </form>
        <div>
          {img.preview && (
            <PreviewImage
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></PreviewImage>
          )}
        </div>
      </UserPost>
    </ProtectRouter>
  );
};

export default Post;
