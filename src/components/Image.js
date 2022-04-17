import React from "react";

const Image = ({ url, title }) => (
  <li className="rounded">
    <img className="rounded" src={url} alt={title} />
  </li>
);

export default Image;
