import React from "react";

const PageUpdates = ({ link, title }) => {
  return (
    <p className="">
      💡
      <a className="text-neutral-100" href={link}>
        {`${title}`}
      </a>
    </p>
  );
};

export default PageUpdates;
