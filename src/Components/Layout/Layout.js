import React from 'react'
import './Layout.css'
import NavBar from '../UI/NavBar/NavBar';
import Paper from '@material-ui/core/Paper';
import Cards from '../UI/Cards/Cards';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Layout(props){
    return(
        <>
        <NavBar/>
        <Paper elevation={0} id="layout-paper">Word List</Paper>
        <Cards/>
        <div className="layout-add-icon">
        <Fab size="small" color="secondary" aria-label="add" >
          <AddIcon onClick={props.openModal} />
        </Fab>
        </div>
        </>
    )
}