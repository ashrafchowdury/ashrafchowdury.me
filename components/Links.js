import React from "react";
import Link from "next/link";
const Links = ({ style }) => {
  return (
    <div className={style}>
      <Link href="/">
        <span>
          <i className="fa-solid fa-house"></i> Home
        </span>
      </Link>
      <Link href="/projects">
        <span>
          <i className="fa-solid fa-list-check"></i> Projects
        </span>
      </Link>
      <Link href="https://ashrafchowdury09.hashnode.dev/" target="_blank">
        <span>
          <i className="fa-regular fa-newspaper"></i> Blogs
        </span>
      </Link>
      <Link href="/about">
        <span>
          <i className="fa-regular fa-address-card"></i> About Me
        </span>
      </Link>
    </div>
  );
};

export default Links;