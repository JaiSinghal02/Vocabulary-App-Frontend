import React from 'react'
import './Layout.css'
import NavBar from '../UI/NavBar/NavBar'
import Paper from '@material-ui/core/Paper';
import Cards from '../UI/Cards/Cards'

export default function Layout(){
    return(
        <>
        <NavBar/>
        <Paper elevation={0} className="layout-paper">Word List</Paper>
        <Cards/>
        </>
    )
}