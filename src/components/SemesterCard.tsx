import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  CardActionArea
} from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"

interface SemesterInfo{
  id: string;
  title: string;
}


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  Grid: {
    margin: "0",
    width: "375px",
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

export default function SemesterCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item sm={6} md={4} lg={3}>
    <Card className={classes.root}>
      <CardContent>
        <RouterLink to={'/semester/semester1'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button>Åpne semester</Button>
        </RouterLink>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  );
  }