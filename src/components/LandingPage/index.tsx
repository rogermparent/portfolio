import * as React from "react";

import { LandingSection } from "./LandingSection";
import { WorkedOnSection } from "./WorkedOnSection";

const LandingPage: React.FC = () => {
  return (
    <main>
      <LandingSection />
      <WorkedOnSection />
    </main>
  );
};

export default LandingPage;
