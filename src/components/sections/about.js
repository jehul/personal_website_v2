import React from "react"
import { Typography, Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import MediaCard from "../MediaCard"
const useStyles = makeStyles(theme => ({
  aboutContainer: {
    verticalAlign: "middle",
    height: "100vh",
  },
}))

const About = ({ data }) => {
  const styles = useStyles()
  const { frontmatter } = data[0].node
  const { title, description } = frontmatter

  return (
    <Container>
      <div className={styles.aboutContainer}>
        <Typography
          component="h2"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          {description}
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <MediaCard />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default About
