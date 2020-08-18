import React from "react"
import { Container, Typography, Button, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import scrollTo from "gatsby-plugin-smoothscroll"

const useStyles = makeStyles(theme => ({
  heroContainer: {
    verticalAlign: "middle",
    height: "80vh",
    paddingTop: "30%",
  },
}))

const Hero = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const classes = useStyles()

  return (
    <div>
      <Container>
        <div className={classes.heroContainer}>
          <Typography
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
          >
            {frontmatter.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            {frontmatter.subtitle}
          </Typography>
          <Link to="/about/">
            <Button variant="outlined" onClick={() => scrollTo("#contact")}>
              Let's get in touch
            </Button>
          </Link>
        </div>
      </Container>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Hero
