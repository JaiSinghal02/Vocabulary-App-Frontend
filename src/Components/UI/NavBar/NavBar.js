import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxHeight: '56px',
        position: 'fixed',
        top: '0',
        zIndex: '10',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        paddingBottom: '10px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0),
        marginLeft: 0,
    },
    searchIcon: {
        padding: theme.spacing(0.2, 0),
        height: '100%',
        width: '6%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '5px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        paddingBottom: '10px',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    closeButton:{
        paddingBottom: '10px',
        '&:hover':{
            cursor: 'pointer'
        }
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const [isSearchBar, toggleSearchBar] = useState(false)
    const [searchBarWidth, setSearchBarWidth] = useState('0')

    
    const showSearchBar = () => {
        toggleSearchBar(prev => !prev)
        setSearchBarWidth('100%')
    }
    const hideSearchBar = () => {
        toggleSearchBar(prev => !prev)
        setSearchBarWidth('0')
    }
    let searchBar = null;
    let head = <div>
        <Typography className={classes.title} variant="h6" noWrap>
            Vocab
        </Typography>

        </div>
    let close=null;
    if (isSearchBar) {
        searchBar = <InputBase
            autoFocus="true"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
        />
        head = null
        close=<CloseIcon onClick={hideSearchBar} className={classes.closeButton}/>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {head}
                    <div className={classes.search} style={{ width: searchBarWidth }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon onClick={showSearchBar} style={{paddingBottom: '10px'}} />
                        </div>
                        {searchBar}
                    </div>
                    {close}
                </Toolbar>
            </AppBar>
        </div>
    );
}
