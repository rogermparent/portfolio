import React from "react"
import { css, cx } from "linaria"
import { styled } from "linaria/react"
import sx from "../../util/themed.js"

export const Box = styled.div`
  display: block;
`

export const Button = styled.button`
  ${sx({ variant: "buttons.primary" })}
`
export const Text = styled.p`
  ${sx({ variant: "styles.p" })}
`
export const Flex = styled.div`
  ${sx({ display: "flex" })}
`
export const Container = styled.div`
  ${sx({ variant: "layout.container" })}
`
export const Heading = styled.h2`
  ${sx({ variant: "theme.text.heading" })}
`
export const Link = styled.a`
  ${sx({ variant: "styles.a" })}
`
export const Card = styled.div`
  ${sx({ variant: "cards.primary" })}
`

export const Detail = ({
  summary,
  summaryProps,
  summaryClass,
  className,
  contentProps,
  children,
  ...props
}) => (
  <details
    className={cx(
      css`
        @keyframes open {
          from {
            opacity: 0;
            bottom: 50%;
          }
          to {
            opacity: 1;
            bottom: 0;
          }
        }

        ${sx({
          "& .content": {
            "*": { position: "relative" },
            overflow: "hidden",
          },
          '&[open=""] .content > *': {
            animation: "open 0.25s ease-out",
          },
          ...sx,
        })}
      `,
      className
    )}
    {...props}
  >
    <Heading as="summary" className={summaryClass} {...summaryProps}>
      {summary}
    </Heading>
    <div className="content" {...contentProps}>
      <div>{children}</div>
    </div>
  </details>
)

export const Paragraph = ({ className, ...props }) => (
  <p
    className={cx(
      css`
        ${sx({
          my: 3,
        })}
      `,
      className
    )}
    {...props}
  />
)

const ListItem = props =>
  props.children.type === "li" ? props.children : <li {...props} />

export const List = ({
  children,
  itemProps,
  itemClass,
  as: Component = "ul",
  ...props
}) => {
  return (
    <Component {...props}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <ListItem key={i} className={itemClass} {...itemProps}>
            {child}
          </ListItem>
        ))
      ) : (
        <ListItem {...itemProps}>{children}</ListItem>
      )}
    </Component>
  )
}

export const Section = ({ children, innerClass, className, ...props }) => (
  <section
    className={cx(
      css`
        ${sx({
          py: 1,
        })}
      `,
      className
    )}
    {...props}
  >
    <Container className={innerClass}>
      {children}
    </Container>
  </section>
)
