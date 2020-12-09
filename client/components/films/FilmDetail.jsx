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
  // root: {
  //   maxWidth: 345
  // },
  // media: {
  //   height: 100,
  //   paddingTop: '56.25%' // 16:9
  // },
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
  resetResults,
  history,
  filmApiId
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddFilm = () => {
    const newFilm = {
      Poster,
      filmApiId,
      Title,
      Year
    }
    console.log('newFilm', newFilm)
    postFilmToList(newFilm)

    // resetResults()
    console.log(history)
    history.push('/filmlist')
  }

  return (
    <Card className="card image-size"
      style={{ backgroundColor: 'transparent', borderRadius: '30px', borderColor: '#8b2eff' }}>

      <Typography
        style={{ fontFamily: 'rubik', fontSize: '27px', color: '#8b2eff', textAlign: 'center' }} title>{Title}</Typography>
      <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#8b2eff', textAlign: 'center' }}subheader>{Year}</Typography>
      {/*
      <CardHeader title={Title} subheader={Year} /> */}
      <CardMedia
        className='image'
        image={Poster === undefined ? '' : `${Poster}`}
        alt={Title}
        key={filmApiId}
        title={Title}
      />

      <CardActions style={{ justifyContent: 'left', padding: '0' }}disableSpacing>
        <IconButton aria-label='add to list' onClick={handleAddFilm}>
          <AddCircleIcon style={{ color: '#8b2eff', fontSize: '45' }}/>
        </IconButton>
        {/*
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon style={{ color: '#8b2eff', fontSize: '45' }}/>
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent style={{ padding: '0' }}>
          <Typography style={{ fontFamily: 'rubik', fontSize: '1rem', color: '#8b2eff', textAlign: 'center' }} paragraph>{Title}</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  )
}

export default FilmDetail
