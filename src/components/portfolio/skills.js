import React from "react"
import { css, cx } from "linaria"
import sx from "../../util/themed.js"
import { Box, Heading, Link, Paragraph, Section, Detail } from "./shared"

const Skill = ({ heading, children }) => (
  <Detail
    className={css`
      ${sx({ my: 4 })}
    `}
    summaryClass={css`
      ${sx({ fontSize: [3, 4] })}
    `}
    summary={heading}
  >
    {children}
  </Detail>
)

const Skills = () => {
  return (
    <Section
      id="skills"
      containerProps={{
        sx: {
          mt: 5,
          mb: [5, 6],
        },
      }}
    >
      <Heading
        className={css`
          ${sx({
            fontSize: 6,
            textAlign: "center",
            my: 5,
          })}
        `}
      >
        My Skills
      </Heading>

      <Box my={[5, 6]}>
        <Skill heading="HTML5 and CSS3">
          <Paragraph>
            I've experienced and learned from many website trends, and these
            days I like to focus on semantic HTML, backward-compatible CSS, and
            progressive enhancement.
          </Paragraph>
        </Skill>

        <Skill heading="Gatsby.js">
          <Paragraph>
            I absolutely love this framework, to the point where I even decided
            to make this portfolio with it! If you don't know about Gatsby, I
            invite you to{" "}
            <Link
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              check it out
            </Link>
            ! Gatsby features React.js, GraphQL, and the{" "}
            <Link
              href="https://jamstack.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JAMstack
            </Link>
            , so I've been learning three of the biggest modern web technologies
            at the same time!
          </Paragraph>
          <Paragraph>
            Working with Gatsby, I can create websites that pull content from
            any source, feature custom dynamic user interaction, and easily get
            stellar scores on Google's Lighthouse audit!
          </Paragraph>
        </Skill>

        <Skill heading="React.js">
          <Paragraph>
            Where I got into Gatsby.js, React soon followed. I absolutely love
            working with the new functional hooks API, taking advantage of
            useReducer to make deterministic application logic and useEffect to
            painlessly integrate finicky vendor libraries.
          </Paragraph>
        </Skill>

        <Skill heading="Javascript and Node.js">
          <Paragraph>
            I know how to manipulate the DOM even without a framework, and I've
            familiarized myself with the more subtle parts of the core language
            like closures and callbacks.
          </Paragraph>
          <Paragraph>
            Aside from the language, I'm also familiar with transpilation
            tooling like Webpack and Babel.
          </Paragraph>
        </Skill>

        <Skill heading="C-like Languages">
          <Paragraph>
            I've worked with and taken classes on Java, C, C++, C#, Ruby,
            Python, and a few others. While I could list each of these
            individually to pad out this skills section, it really comes down to
            me having a familiarity with C-like languages.
          </Paragraph>
          <Paragraph>
            Of course each of these languages has its own syntax and quirks, but
            given a little bit of time to refamiliarize myself, I'm confident I
            can get back into any of these languages and translate most of the
            skills I've learned over the years.
          </Paragraph>
        </Skill>

        <Skill heading="Git">
          <Paragraph>
            I have a good grasp of both Git's fundamentals as well as some
            slightly more advanced operations like branch workflow and rebasing.
          </Paragraph>
        </Skill>

        <Skill heading="Linux Administration">
          <Paragraph>
            I've used both SysVInit and SystemD environments, most desktop
            environments, and <i>tons</i> of the command line. Whether it be a
            webserver, database, or a humble kiosk, I can find my way around it
            if it runs Linux.
          </Paragraph>
          <Paragraph>
            For anything I don't already have memorized, I know how to leverage
            "-h", man pages, and good ol' Google to learn it.
          </Paragraph>
        </Skill>

        <Skill heading="Communication">
          <Paragraph>
            While my previous jobs don't count much for my development skills,
            my time in retail let me develop the ability to profesionally
            communicate with both customers and team members. I can fit onto any
            team and get along with everybody!
          </Paragraph>
          <Paragraph>
            Beyond simply getting along with others, I'm also good at breaking
            down technical concepts for laymen to understand. I do my best to
            keep jargon to a minimum and make sure everybody is up to speed!
          </Paragraph>
        </Skill>
      </Box>
    </Section>
  )
}

export default Skills
