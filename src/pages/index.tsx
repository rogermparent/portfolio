import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import DefaultLayout from "../layouts/default";
import { LandingSection } from "./LandingSection";
import { WorkedOnSection } from "./WorkedOnSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <main>
        <LandingSection />
        <WorkedOnSection />
      </main>
    </DefaultLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
