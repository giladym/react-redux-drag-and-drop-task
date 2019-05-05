import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#431010',
},
videoWidth: {
   width: '100%',
}
});

function NotFound({classes}) {
    return (
      <section className={classes.wrapper}>
      <video controls="" autoPlay loop muted name="media"  className={classes.videoWidth}>
      <source src="https://giant.gfycat.com/WateryAdorableCrow.webm" type="video/webm"/>
      </video>
      </section>
    );
  }

  export default withStyles(styles)(NotFound);