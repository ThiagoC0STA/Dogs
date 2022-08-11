/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Wrapper } from "./H__style";

const ImageRendering = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Wrapper>
      {skeleton && <div></div>}
      <img onLoad={handleLoad} alt="" {...props} />
    </Wrapper>
  );
};

export default ImageRendering;
