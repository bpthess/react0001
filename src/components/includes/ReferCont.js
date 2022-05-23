import React from "react";
import { Link } from "react-router-dom";

function ReferCont({ id, title, desc, use }) {
  return (
    <li>
      <Link
        to={{
          pathname: "refer-detail",
          state: { id, title, desc, use },
        }}
      >
        <span className="num">{id}</span>
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
        <span className="use">{use}</span>
      </Link>
    </li>
  );
}

export default ReferCont;
