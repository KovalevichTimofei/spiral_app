import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        paddingTop: theme.spacing(7),
    },
}));

export default function AccountsPage() {
    const classes = useStyles();

    return (
        <div className={classes.content}>Account page</div>
    );
}
