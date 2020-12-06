import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
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
  //alt,
  image,
  //author,
  //description,
  //resetResults,
  //history,
  isbn
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleRemoveBook = () => {
    const book = {
      // const Book {isbn}
      //key,
      //image,
      isbn
    }
    console.log(book) // Book
    delBookFromList(book) // delBookFromList(book)

    // resetResults()
    history.push('/booklist')
  }

  return (
    <Card className={classes.root}>
      <CardHeader
      // action={
      //   <IconButton aria-label='settings'>
      //     <MoreVertIcon />
      //   </IconButton>
      // }
      // title={alt} // comment out until data is in database
      // subheader={author} // comment out until data is in database
      />
      <CardMedia
        className={classes.media}
        image={image === undefined ? '' : `${image}`}
        // alt={alt} // comment out until data is in database
        key={key}
        // title={alt} // comment out until data is in database
      />

      <CardActions disableSpacing>
        <IconButton aria-label='add to list' onClick={handleRemoveBook}>
          {/* <AddCircleIcon /> */}
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
          {/* <Typography paragraph>{description}</Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  )
}

// class BookCard extends React.Component {
//   render() {
//     return (
//       <a className='carousel-item' href='#one!'>
//         <img src={this.props.image} />
//       </a>
//     )
//   }
// }

export default BookCard
