import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import DefaultLayout from "../layouts/default";
import LandingPage from "../components/LandingPage";
import SEO from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <LandingPage />
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
