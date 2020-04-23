import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '20px',
    },
    headerWhite: {
        backgroundColor: 'white',
    },
    headerMagenta: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    headerGreen: {
        backgroundColor: theme.palette.darkSeaGreen.main,
        color: 'white',
    },
    avatar: {
        backgroundColor: red[500],
    },
    actions: {
        justifyContent: 'center',
        paddingBottom: theme.spacing(3),
    },
    button: {
        borderRadius: theme.spacing(3),
        textTransform: 'none',
    },
}));

const HEADERS_TYPES = {
    GIVING: 'giving',
    FINANCIALS: 'financials',
    EVENTS: 'events',
};

CardBase.defaultProps = {
    type: null,
    title: null,
    subtitle: null,
    avatar: null,
    media: null,
    supportText: null,
    buttons: null,
};

CardBase.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.string,
    media: PropTypes.object,
    supportText: PropTypes.string,
    buttons: PropTypes.array,
};

export default function CardBase(props) {
    const classes = useStyles();
    const { GIVING, FINANCIALS, EVENTS } = HEADERS_TYPES;
    const {
        type, title, subtitle, avatar, media, children, supportText, buttons,
    } = props;

    const btnColor = type === EVENTS ? 'darkSeaGreen' : 'primary';

    return (
        <Card className={classes.root}>

            {type !== 'account' ? (
                <CardHeader
                    avatar={<Avatar alt="avatar" src={avatar} classes={{ root: classes.avatar }} />}
                    title={title}
                    subheader={subtitle}
                    className={clsx({
                        headerWhite: type === GIVING,
                        headerMagenta: type === FINANCIALS,
                        headerGreen: type === EVENTS,
                    })}
                />
            ) : null}

            {media}

            {children ? (
                <CardContent>
                    {children}
                </CardContent>
            ) : null}

            {supportText ? (
                <CardContent>
                    <Typography>
                        {supportText}
                    </Typography>
                </CardContent>
            ) : null}

            {buttons ? (
                <CardActions className={classes.actions}>
                    {buttons.map(button => (
                        <Button key={button.label} className={classes.button} variant="outlined" color={btnColor}>
                            {button.label}
                        </Button>
                    ))}
                </CardActions>
            ) : null}

        </Card>
    );
}
