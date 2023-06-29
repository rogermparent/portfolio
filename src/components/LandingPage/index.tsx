import * as React from "react";

import { LandingSection } from "./LandingSection";
import { WorkedOnSection } from "./WorkedOnSection";
import { ContactSection } from "./ContactSection";

const LandingPage: React.FC = () => {
  return (
    <main>
      <LandingSection />
      <WorkedOnSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
