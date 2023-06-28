import * as React from "react";
import "@fontsource/open-sans";
import "@fontsource/open-sans/800.css";
import "./style.css";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
