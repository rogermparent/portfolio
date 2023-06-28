import React from "react";
import * as styles from "./styles.css";
import dvcOrgVideo from "../../video/dvc-org-demo.mp4";
import cmlDevVideo from "../../video/cml-dev-demo.mp4";
import iterativeAiVideo from "../../video/iterative-ai-demo.mp4";

const workedOnData = [
  {
    name: "dvc.org",
    demoLink: "https://dvc.org",
    githubLink: "https://github.com/iterative/dvc.org",
    description:
      "The website for Iterative's popular open-source Machine Learning tool, DVC. Check out the slick landing page!",
    video: dvcOrgVideo,
  },
  {
    name: "cml.dev",
    demoLink: "https://cml.dev",
    githubLink: "https://github.com/iterative/cml.dev",
    description:
      "Another website for Iterative, built from the ground up. Has a unique feature to seamlessly switch between three different versions of content.",
    video: cmlDevVideo,
  },
  {
    name: "iterative.ai",
    demoLink: "https://iterative.ai",
    githubLink: "https://github.com/iterative/iterative.ai",
    description:
      "Iterative's company website featuring the company blog which implements an advanced content storage system that mitigates the problem of storing images in a content-as-code setup.",
    video: iterativeAiVideo,
  },
];

export const WorkedOnSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2>What have I worked on</h2>
      <ul>
        {workedOnData.map(
          ({ name, githubLink, demoLink, video, description }, i) => {
            return (
              <li key={i} className={styles.item}>
                <h3 className={styles.itemHeading}>{name}</h3>
                <video
                  src={video}
                  className={styles.video}
                  controls={true}
                  controlsList="play"
                />
                <div className={styles.links}>
                  <a href={demoLink} target="_blank" className={styles.link}>
                    Demo
                  </a>{" "}
                  <a href={githubLink} target="_blank" className={styles.link}>
                    GitHub
                  </a>
                </div>
                <p>{description}</p>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};
