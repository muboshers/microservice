import React from "react";
import Button from "next2/button";

export default function Components() {
  return (
    <div>
      <Button />
    </div>
  );
}

Components.getInitialProps = async () => {
  return {
    ssr: "HOLA SSR",
  };
};
