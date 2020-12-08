import React from 'react'

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
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone'
import clsx from 'clsx'

import { delFilmFromList } from '../../apis/films'

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

const FilmCard = ({ filmApiId, title, year, image, refreshList }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleRemoveFilm = () => {
    console.log(filmApiId)
    const film = {
      filmApiId
    }
    delFilmFromList(film).then((films) => {
      refreshList(films)
    })
  }

  return (
    <Card
      className='card'
      style={{ backgroundColor: 'transparent', borderRadius: '30px', borderColor: '#2652ff' }}
    >
      <CardHeader />
      <CardMedia
        className='image'
        image={image === undefined ? '' : `${image}`}
        key={filmApiId}
      />

      <CardActions style={{ padding: '0' }} disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon style={{ color: '#2652ff', fontSize: '45' }}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent style={{ padding: '0' }}>
          <Typography style={{ fontFamily: 'rubik', fontSize: '27px', color: '#2652ff', textAlign: 'center' }} paragraph>{title}</Typography>
          <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#2652ff', textAlign: 'center' }}paragraph>{year}</Typography>
          <IconButton aria-label='remove from list' onClick={handleRemoveFilm} style={{ paddingTop: '0' }}>
            <DeleteForeverTwoToneIcon style={{ color: '#2652ff', fontSize: '27' }}/>
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default FilmCard
