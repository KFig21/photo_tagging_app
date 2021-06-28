import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container px-2 lg:px-4 mx-auto ${
        props.navPadding && "pt-16 pb-8 lg:pt-24"
      }`}
    >
      <main>{props.children}</main>
    </div>
  );
};

export default Container;
