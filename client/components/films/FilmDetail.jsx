import React from 'react'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography
} from '@material-ui/core/'
import clsx from 'clsx'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { postFilmToList } from '../../apis/films'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

const FilmDetail = ({
  Title,
  Year,
  Poster,
  Director,
  Plot,
  resetResults,
  history,
  imdbID
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddFilm = () => {
    const newFilm = {
      image,
      isbn,
      title,
      description,
      author
    }
    console.log(newFilm)
    postFilmToList(newFilm)

    // resetResults()
    console.log(history)
    history.push('/filmlist')
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={Title}
        subheader={Director}
        subheader={Year}
      />
      <CardMedia
        className={classes.media}
        image={Poster === undefined ? '' : `${Poster}`}
        alt={Title}
        key={imdbID}
        title={Title}
      />

      <CardActions disableSpacing>
        <IconButton aria-label='add to list' onClick={handleAddFilm}>
          <AddCircleIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>{Plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default FilmDetail
