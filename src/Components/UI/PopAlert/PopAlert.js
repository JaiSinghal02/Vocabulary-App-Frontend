import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import './PopAlert.css'

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function PopAlert(props) {
  return (
    <div >
      <Snackbar
        open={props.open}
        TransitionComponent={SlideTransition}
        onClose={props.close}
        message={props.message}
        style={{bottom:'-4px'}}
        autoHideDuration={3000}
        disableWindowBlurListener={true}
      />
    </div>
  );
}
