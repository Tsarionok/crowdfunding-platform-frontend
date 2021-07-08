import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgressWithLabel from './ProgressBar';

const useStyles = makeStyles({
  root: {
    width: '300px',
  },
});

const ProgressContainer = ({ progressValue }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progressValue} />
    </div>
  );
}

export default ProgressContainer;