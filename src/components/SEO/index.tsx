import React from "react";

const SEO = ({ title = "Portfolio | Roger M. Parent" }) => {
  return (
    <>
      <html lang="en" />
      <meta
        name="description"
        content="Portfolio for Roger M. Parent, software developer"
      />
      <title>{title}</title>
    </>
  );
};

export default SEO;
