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
import { postBookToList } from '../apis/books'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345
  // },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%' // 16:9
  // },
  // cardFont: {
  //   fontFamily: 'rubik',
  //   fontSize: '27px',
  //   color: '#8b2eff',
  //   textAlign: 'center'
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

const BookDetail = ({
  key,
  title,
  image,
  author,
  description,
  resetResults,
  history,
  isbn
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddBook = () => {
    const newBook = {
      image,
      isbn,
      title,
      description,
      author
    }
    console.log(newBook)
    postBookToList(newBook)

    console.log(history)
    history.push('/booklist')
  }

  return (
    <Card className="card"
      style={{ backgroundColor: 'transparent', borderRadius: '30px', borderColor: '#8b2eff' }}>

      <Typography
        style={{ fontFamily: 'rubik', fontSize: '27px', color: '#8b2eff', textAlign: 'center' }} title>{title}</Typography>
      <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#8b2eff', textAlign: 'center' }}subheader>{author}</Typography>

      {/*
      </CardHeader>
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={author}
      /> */}

      <CardMedia
        className='image'
        image={image === undefined ? '' : `${image}`}
        alt={title}
        key={key}
        title={title}
      />

      <CardActions style={{ justifyContent: 'center', padding: '0' }} disableSpacing>
        <IconButton aria-label='add to list' onClick={handleAddBook}>
          <AddCircleIcon style={{ color: '#8b2eff', fontSize: '45' }} />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon style={{ color: '#8b2eff', fontSize: '45' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent style={{ padding: '0' }}>
          <Typography
            style={{ fontFamily: 'rubik', fontSize: '1rem', color: '#8b2eff', textAlign: 'center' }} paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>

  )
}

export default BookDetail
