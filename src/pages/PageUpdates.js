import React from "react";

const PageUpdates = ({ link, title, light = false }) => {
  return (
    <p className="">
      {light && <span>💡</span>}

      <a className="text-neutral-100 font-regular" href={link}>
        {`${title}`}
      </a>
    </p>
  );
};

export default PageUpdates;
