import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import GavelIcon from '@material-ui/icons/Gavel';

const useStyles = makeStyles(theme => ({
    list: {
        marginTop: theme.spacing(8),
    },
    listItemIcon: {
        color: 'white',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
}));

AppMenu.defaultProps = {
    isOpen: false,
    openChange: () => {},
};

AppMenu.propTypes = {
    isOpen: PropTypes.bool,
    openChange: PropTypes.func,
};

export default function AppMenu(props) {
    const classes = useStyles();
    const { isOpen, openChange } = props;

    const closeMenu = () => openChange(false);

    const listItems = [
        { name: 'Help and support', icon: <HelpOutlineIcon /> },
        { name: 'Alert settings', icon: <NotificationsIcon /> },
        { name: 'Accessibility', icon: <DirectionsWalkIcon /> },
        { name: 'Policies and Terms', icon: <GavelIcon /> },
    ];

    const list = (
        <List className={classes.list}>
            {listItems.map(({ name, icon }) => (
                <ListItem button key={name}>
                    <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );

    return (
        <Drawer open={isOpen} onClose={closeMenu} classes={{ paper: classes.paper }}>
            {list}
        </Drawer>
    );
}
