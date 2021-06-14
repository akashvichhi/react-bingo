import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CssBaseline } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: ,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <CssBaseline />
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
          well meaning and kindly.
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}

    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>