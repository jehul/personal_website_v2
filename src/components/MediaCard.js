import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"

import CardMedia from "@material-ui/core/CardMedia"

import gridDynamicsLogo from "../../public/static/images/grid-dynamics-logo.png"

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 300,
  },
})

const MediaCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={gridDynamicsLogo}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  )
}

export default MediaCard