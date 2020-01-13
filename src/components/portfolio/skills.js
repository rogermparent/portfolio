/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Heading, Link } from "@theme-ui/components"
import { Paragraph, Section, Detail } from "./shared"

const Skill = ({ heading, children }) => (
  <Detail sx={{ my: 4 }} summarySx={{ fontSize: [3, 4] }} summary={heading}>
    {children}
  </Detail>
)

const Skills = () => {
  return (
    <Section
      id="skills"
      childProps={{
        sx: {
          my: 5,
        },
      }}
    >
      <Heading
        sx={{
          fontSize: 6,
          textAlign: "center",
          my: 5,
        }}
      >
        My Skills
      </Heading>

      <Box my={[5, 6]}>
        <Skill heading="HTML5 and CSS3">
          <Paragraph>
            The first software languages I learned, what everything on the
            internet starts and ends with. I've experienced and learned from
            many website trends, and these days I like to focus on semantic HTML
            and efficient, backward-compatible CSS.
          </Paragraph>
        </Skill>

        <Skill heading="Gatsby.js">
          <Paragraph>
            I absolutely love this framework, and that admiration has only
            increased in the two years I've been studying it- to the point where
            I even decided to make this portfolio with it! If you don't know
            about Gatsby, I invite you to{" "}
            <Link href="https://www.gatsbyjs.org/">check it out</Link>! Gatsby
            features React.js, GraphQL, and the{" "}
            <Link href="https://jamstack.org/">JAMstack</Link>, so I've been
            learning three of the biggest modern web technologies at the same
            time!
          </Paragraph>
          <Paragraph>
            Working with Gatsby, I can create websites that pull content from
            any source, feature custom dynamic user interaction, and easily get
            perfect scores on Google's Lighthouse audit!
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
            Aside from the raw language, I'm also familiar with the more modern
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
            A necessary skill for all developers! I have a good grasp of both
            Git's fundamentals as well as some slightly more advanced operations
            like branch workflow and rebasing.
          </Paragraph>
        </Skill>

        <Skill heading="Linux Administration">
          <Paragraph>
            I've used various flavors of linux since I was young, from Ubuntu
            and Debian to Fedora and CentOS. I've used both SysVInit and SystemD
            environments, most desktop environments, and <i>tons</i> of the
            command line. Whether it be a webserver, database, or a humble
            kiosk, I can find my way around it if it runs Linux.
          </Paragraph>
          <Paragraph>
            For anything I don't already have memorized, I know how to leverage
            "-h", man pages, and good ol' Google to learn it.
          </Paragraph>
          <Paragraph>
            While I won't directly be using Linux in most development projects,
            It always helps to be familiar with the environment a project will
            be deployed on!
          </Paragraph>
        </Skill>

        <Skill heading="Communication">
          <Paragraph>
            It's no secret that "soft skills" are an important part of every
            job, including software development!
          </Paragraph>
          <Paragraph>
            While my previous jobs don't count much for my development skills,
            my time in retail let me develop the ability to profesionally
            communicate with both customers and team members alike! I can fit
            onto any team and get along with everybody.
          </Paragraph>
          <Paragraph>
            Not only can I get along with others, but I'm also good at breaking
            down technical concepts for laymen to understand. I do my best to
            keep jargon to a minimum and make sure everybody is up to speed!
          </Paragraph>
        </Skill>
      </Box>
    </Section>
  )
}

export default Skills
