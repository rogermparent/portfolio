import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import * as styles from "./styles.css";

const Item: React.FC<{
  image: ReactNode;
  name: string;
  description: string;
  githubLink: string;
  demoLink: string;
}> = ({ name, description, githubLink, demoLink, image }) => {
  return (
    <li className={styles.item}>
      <a href={demoLink} target="_blank" rel="noreferrer">
        <h3 className={styles.itemHeading}>{name}</h3>
        {image}
      </a>
      <div className={styles.links}>
        <a
          href={demoLink}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Demo
        </a>{" "}
        <a
          href={githubLink}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <p>{description}</p>
    </li>
  );
};

export const WorkedOnSection = () => {
  return (
    <section className={styles.wrapper} id="worked-on">
      <h2 className={styles.sectionHeading}>What have I worked on?</h2>
      <ul className={styles.list}>
        <Item
          name="dvc.org"
          demoLink="https://dvc.org"
          githubLink="https://github.com/iterative/dvc.org"
          description="The website for Iterative's popular open-source Machine Learning tool, DVC. Check out the slick landing page!"
          image={
            <StaticImage
              className={styles.video}
              alt=""
              src="../../../images/dvc-org-screenshot.png"
            />
          }
        />
        <Item
          name="cml.dev"
          demoLink="https://cml.dev"
          githubLink="https://github.com/iterative/cml.dev"
          description="Another website for Iterative, built from the ground up. Has a unique feature to seamlessly switch between three different versions of content."
          image={
            <StaticImage
              className={styles.video}
              alt=""
              src="../../../images/cml-dev-screenshot.png"
            />
          }
        />
        <Item
          name="iterative.ai"
          demoLink="https://iterative.ai"
          githubLink="https://github.com/iterative/iterative.ai"
          description="Iterative's company website featuring the company blog which implements an advanced content storage system that mitigates the problem of storing images in a content-as-code setup."
          image={
            <StaticImage
              className={styles.video}
              alt=""
              src="../../../images/iterative-ai-screenshot.png"
            />
          }
        />
      </ul>
    </section>
  );
};
