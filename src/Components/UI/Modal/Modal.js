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
import WordInfo from '../../WordInfo/WordInfo'
import axios from 'axios'
import './Modal.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflowY: 'scroll'
  },
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 0.5),
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 0.5),
    width: '100%',
    minHeight: '5000px',
    overflowY: 'auto'
  },
  infoHead:{
    backgroundColor: 'white',
    position: 'fixed',
    width:'97%',
    top: '0',
    zIndex:'1',
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
      marginBottom: '0',
      fontSize: '40px'
  },
  buttonProgress: {
    color: "primary",
    position: 'absolute',
    marginTop: '14px',
    marginRight: '19px',
  },
}));

export default function Modaal(props) {
  const classes = useStyles();
  const [loading,setLoading]=useState(false)
  const [newWord,setNewWord]=useState("")
  let modalContent=null
const addButtonClick = ()=>{
    setLoading(!loading)
    
    axios.post(`/dictionary/add/word/${newWord}`)
    .then(res=>{
      setLoading(!loading)
      props.closeModal(newWord)
    })
    .catch(err=>{
      setLoading(!loading)
      props.closeModal("error",err.message)
    })
}
  
  if(props.addModal){
    modalContent=<div className={classes.paper1} style={{height: props.modalHeight,width: props.modalWidth}}>
                    <h3 id="transition-modal-title">Add to Dictionary</h3>
                    <TextField autoFocus={true} id="standard-required" label="New Word" 
                    onChange={(e)=>setNewWord(e.target.value)}
                    defaultValue="" 
                    InputLabelProps={{shrink: true,}}
                    autoComplete="off"
                    />
                    <div className="add-modal-button">
                        <Button color="primary" onClick={addButtonClick} disabled={loading}>Add</Button>
                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                        <Button color="primary" onClick={props.closeModal}>Cancel</Button>
                    </div>
                </div>
    }
else if(props.wordModal){
    modalContent=<div className={classes.paper2} >
              <div className={classes.infoHead}>
                <CloseIcon onClick={props.closeModal} className={classes.closeModalIcon} />
            <h1 id="transition-modal-title" className={classes.wordInfoHead}>{props.data["_id"]}</h1>
            <div style={{width: '100%', height: '3px',display: 'block'}}>
            <Divider style={{display: 'flex'}} light />
            </div>
            </div>
            <div style={{position: 'absolute',top: '110px',width: '97%'}}>

            <div style={{width:'98%'}}>
              <WordInfo data={props.data}/>
            </div>
            </div>
</div>
}


  return (
    <div style={{width:'100%',overflowY: 'auto'}}>
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
