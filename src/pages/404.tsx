import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import SEO from "../components/SEO";
import DefaultLayout from "../layouts/default";
import NotFound from "../components/404";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <NotFound />
    </DefaultLayout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="Page not found!" />;
