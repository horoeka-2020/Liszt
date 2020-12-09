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

import { delBookFromList } from '../apis/books'
import { FullscreenExit } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
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

const BookCard = ({ image, refreshList, isbn, title, author }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleRemoveBook = () => {
    const book = {
      isbn
    }
    delBookFromList(book).then((books) => {
      refreshList(books)
    })
  }

  return (
    <Card
      className='card image-size'
      style={{
        backgroundColor: 'transparent',
        borderRadius: '30px',
        borderColor: '#ff4400'
      }}
    >
      <CardHeader />
      <CardMedia
        className='image'
        image={image === undefined ? '' : `${image}`}
        // key={key}
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
          <ExpandMoreIcon style={{ color: '#ff4400', fontSize: '45' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent style={{ padding: '0' }}>
          <Typography
            style={{
              fontFamily: 'rubik',
              fontSize: '27px',
              color: '#ff4400',
              textAlign: 'center'
            }}
            paragraph
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontFamily: 'rubik',
              fontSize: '19px',
              color: '#ff4400',
              textAlign: 'center'
            }}
            paragraph
          >
            {author}
          </Typography>
          <IconButton
            aria-label='remove from list'
            onClick={handleRemoveBook}
            style={{ paddingTop: '0' }}
          >
            <DeleteForeverTwoToneIcon
              style={{ color: '#ff4400', fontSize: '27' }}
            />
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default BookCard
