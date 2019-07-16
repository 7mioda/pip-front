import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './withStyle';

const FancyLinearProgress = ({ isFetching, classes }) => (
  <div>
    {isFetching && (
      <LinearProgress
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary,
        }}
        style={{ zIndex: '100000' }}
      />
    )}
  </div>
);

export default withStyles(styles)(FancyLinearProgress);
