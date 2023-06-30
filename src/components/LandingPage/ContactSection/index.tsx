import React, { ReactNode } from "react";
import * as styles from "./styles.css";
import LinkedinIcon from "../../../images/linkedin.inline.svg";
import GithubIcon from "../../../images/github-mark.inline.svg";

const ContactLink: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className={styles.contactLink}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export const ContactSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionHeading}>Want to work with me?</h2>
      <ContactLink href="mailto:rogermparent@gmail.com">
        <span className={styles.contactIcon}>&#9993;</span>{" "}
        rogermparent@gmail.com
      </ContactLink>
      <ContactLink href="https://github.com/rogermparent">
        <GithubIcon width={24} height={24} className={styles.contactIcon} />{" "}
        github.com/rogermparent
      </ContactLink>
      <ContactLink href="https://linkedin.com/in/rogermparent">
        <LinkedinIcon width={24} height={24} className={styles.contactIcon} />{" "}
        linkedin.com/in/rogermparent
      </ContactLink>
    </section>
  );
};
