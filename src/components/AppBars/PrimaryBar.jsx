import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        zIndex: theme.zIndex.modal + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'center',
        flexGrow: 1,
    },
    avatar: {
        border: 'solid 1px white',
    },
}));

MenuAppBar.defaultProps = {
    isOpen: false,
    openChange: () => {},
};

MenuAppBar.propTypes = {
    isOpen: PropTypes.bool,
    openChange: PropTypes.func,
};

export default function MenuAppBar(props) {
    const classes = useStyles();
    const { isOpen, openChange } = props;

    const openCloseSideMenu = () => openChange(!isOpen);

    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} onClick={openCloseSideMenu} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>Logo</Typography>
                <Avatar alt="avatar" src="img/avatar.jpg" classes={{ root: classes.avatar }} />
            </Toolbar>
        </AppBar>
    );
}
