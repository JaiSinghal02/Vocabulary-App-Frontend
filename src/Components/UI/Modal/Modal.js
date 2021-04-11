import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
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
  closeModalIcon:{
      position: 'fixed',
      right: '25px',
      '&:hover':{
          cursor: 'pointer'
      }
  },
  wordInfoHead:{
      marginTop: '50px',
      marginBottom: '0  '
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    marginTop: '14px',
    marginRight: '19px',
  },
}));

export default function Modaal(props) {
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  let modalContent=null
const addButtonClick = ()=>{
    setLoading(!loading)
}
  
  if(props.addModal){
    modalContent=<div className={classes.paper} style={{height: props.modalHeight,width: props.modalWidth}}>
                    <h3 id="transition-modal-title">Add to Dictionary</h3>
                    <TextField autoFocus="true" id="standard-required" label="New Word" defaultValue="" InputLabelProps={{shrink: true,}} />
                    <div className="add-modal-button">
                        <Button color="primary" onClick={addButtonClick} disabled={loading}>Add</Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        <Button color="primary" onClick={props.closeModal}>Cancel</Button>
                    </div>
                </div>
    }
else if(props.wordModal){
    modalContent=<div className={classes.paper} style={{height: props.modalHeight,width: props.modalWidth}}>
        <CloseIcon onClick={props.closeModal} className={classes.closeModalIcon} />
    <h1 id="transition-modal-title" className={classes.wordInfoHead}>Word</h1>
    <div style={{width: '100%', height: '3px',display: 'block'}}>
    <Divider style={{display: 'flex'}} light />
    </div>
    <div className="add-modal-button">
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
