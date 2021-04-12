import React from 'react'
import './Layout.css'
import NavBar from '../UI/NavBar/NavBar';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

export default function Layout(props){
    return(
        <>
        <NavBar searchBarQuery={props.searchBarQuery} isSearching={props.isSearching} isNotSearching={props.isNotSearching}/>
        <Paper elevation={0} id="layout-paper">Word List</Paper>
        <Divider id="layout-paper-divider" light />
        
        <div className="layout-add-icon" style={{zIndex:'500'}}>
        <Fab size="small" color="primary" aria-label="add" onClick={props.openModal}   >
          <AddIcon />
        </Fab>
        </div>
        </>
    )
}