import React from 'react'

import { makeStyles, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core/'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone'
import clsx from 'clsx'

import { delBookFromList } from '../apis/books'

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

const BookCard = ({
  key,
  image,
  refreshList,
  isbn,
  title,
  author
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleRemoveBook = () => {
    const book = {
      isbn
    }
    delBookFromList(book)
      .then((books) => {
        refreshList(books)
      })
  }

  return (
    <Card className={classes.root}>
      <CardHeader
      />
      <CardMedia
        className={classes.media}
        image={image === undefined ? '' : `${image}`}
        key={key}
      />

      <CardActions disableSpacing>

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
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>{author}</Typography>
          <IconButton aria-label='remove from list' onClick={handleRemoveBook}>
            <DeleteForeverTwoToneIcon />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default BookCard
