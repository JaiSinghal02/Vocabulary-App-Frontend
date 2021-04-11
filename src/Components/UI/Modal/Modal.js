import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Modal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 0.5),
  },
}));

export default function Modaal(props) {
  const classes = useStyles();
  let modalContent=null
  if(props.addModal){
    modalContent=<div className={classes.paper} style={{height: props.modalHeight,width: props.modalWidth}}>
    <h3 id="transition-modal-title">Add to Dictionary</h3>
    <TextField autoFocus="true" id="standard-required" label="New Word" defaultValue="" InputLabelProps={{shrink: true,}} />
    <div className="add-modal-button">

    <Button color="primary">Add</Button>
    <Button color="primary">Cancel</Button>
    </div>
  </div>
  }


  return (
    <div className="Just chill">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.openModal}
        onClose={props.closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 600,
        }}
      >
        <Fade in={props.openModal}>
          {modalContent}
        </Fade>
      </Modal>
    </div>
  );
}
