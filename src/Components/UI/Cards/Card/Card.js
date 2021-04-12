import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  content:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '20px'
  },
  wordInfo:{
    width:'100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: '15px'
  }
});

export default function Cardd(props) {
  const classes = useStyles();
  const info=props.data.lexicalEntries.map((entry,ind)=>{
    return(
      <Typography key={ind} variant="body2" component="p" className={classes.wordInfo}>
          ({entry["lexicalCategory"]["id"]}) {entry["entries"][0]["senses"][0]["definitions"]}
      </Typography>
    )
  })
  return (
    <Card className={classes.root} variant="outlined" onClick={props.openCard(props.data["_id"])}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" >
          {props.data["_id"]}
        </Typography>
        {info}
      </CardContent>
    </Card>
  );
}
