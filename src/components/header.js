import { Link } from "gatsby"

import { AppBar, Toolbar, Typography } from "@material-ui/core"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <AppBar color="transparent" position="absolute" elevation={0}>
    <Toolbar>
      <Typography variant="h6">
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: `none`,
          }}
        >
          {"/jehu"}
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
