import React from "react"
import { Typography, Container, Grid, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import DescriptionIcon from "@material-ui/icons/Description"

import data from "../../config"

const useStyles = makeStyles(theme => ({
  contactContainer: {
    verticalAlign: "middle",
    height: "40vh",
  },
  iconContainer: {
    marginTop: "20vh",
  },
}))

const Contact = () => {
  const classes = useStyles()

  const { github, linkedin, email } = data.contact

  return (
    <Container id="contact" className={classes.contactContainer}>
      <Typography variant="h3" gutterBottom>
        Let's get in touch.
      </Typography>

      <Typography variant="h5" color="textSecondary" paragraph>
        Feel free to reach out to me for any questions, comments, or concerns.
      </Typography>
      <div className={classes.iconContainer}>
        <Grid container alignItems="center" justify="center" spacing="5">
          <Grid item>
            <Link href={github} color="inherit">
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href={linkedin} color="inherit">
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>

          <Grid item>
            <Link href={email} color="inherit">
              <EmailIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <DescriptionIcon fontSize="large" />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Contact
