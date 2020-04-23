import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PanToolIcon from '@material-ui/icons/PanTool';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        paddingBottom: '30px',
        overflowX: 'scroll',
        backgroundColor: theme.palette.grey[100],
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'inherit',
        },
    },
    divider: {
        width: '100%',
    },
}));

export default function BottomBar() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;

    function handleClick(str) {
        history.push(str);
    }

    const listItems = [
        {
            name: 'Home', icon: <HomeIcon />, onClick: () => handleClick('/home'), value: '/home',
        },
        {
            name: 'Accounts', icon: <AccountBoxIcon />, onClick: () => handleClick('/accounts'), value: '/accounts',
        },
        { name: 'Giving', icon: <PanToolIcon />, onClick: () => {} },
        { name: 'Payments', icon: <MonetizationOnIcon />, onClick: () => {} },
        { name: 'Credits', icon: <CreditCardIcon />, onClick: () => {} },
    ];

    return (
        <BottomNavigation
            showLabels
            value={pathname}
            className={classes.root}
        >
            {listItems.map(item => (
                <BottomNavigationAction
                    key={item.name}
                    label={item.name}
                    icon={item.icon}
                    value={item.value}
                    className={classes.button}
                    onClick={item.onClick}
                />
            ))}
        </BottomNavigation>
    );
}
