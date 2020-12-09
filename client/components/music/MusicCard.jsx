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

import { delMusicFromList } from '../../apis/music'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345
  // },
  // media: {
  //   height: 0,
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

const MusicCard = ({
  musicApiId,
  title,
  album,
  image,
  refreshList,
  artist
}) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleRemoveMusic = () => {
    const music = {
      musicApiId
    }
    delMusicFromList(music).then((musics) => {
      refreshList(musics)
    })
  }

  return (
    <Card className='card image-size' style={{ backgroundColor: 'transparent', borderRadius: '30px', borderColor: '#ff4fc4' }}>
      <CardHeader />
      <CardMedia className='image' image={image} key={musicApiId} />

      <CardActions style={{ padding: '0' }} disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon style={{ color: '#ff4fc4', fontSize: '45' }}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent style={{ padding: '0' }}>
          <Typography style={{ fontFamily: 'rubik', fontSize: '27px', color: '#ff4fc4', textAlign: 'center' }} paragraph>{title}</Typography>
          <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#ff4fc4', textAlign: 'center' }} paragraph>{artist}</Typography>
          <Typography style={{ fontFamily: 'rubik', fontSize: '19px', color: '#ff4fc4', textAlign: 'center' }} paragraph>Album: {album}</Typography>
          <IconButton aria-label='remove from list' onClick={handleRemoveMusic} style={{ paddingTop: '0' }}>
            <DeleteForeverTwoToneIcon style={{ color: '#ff4fc4', fontSize: '27' }}/>
          </IconButton>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MusicCard
