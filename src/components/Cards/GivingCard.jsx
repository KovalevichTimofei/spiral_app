import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import CardMedia from '@material-ui/core/CardMedia';

import Base from './Base';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: 'white',
    },
    mediaImage: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mediaVideo: {
        height: '306px',
    },
}));

GivingCard.defaultProps = {
    title: null,
    subtitle: null,
    avatar: null,
    media: null,
    supportText: null,
    buttons: null,
};

GivingCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.string,
    media: PropTypes.object,
    supportText: PropTypes.string,
    buttons: PropTypes.array,
};

export default function GivingCard(props) {
    const classes = useStyles();
    const {
        title, subtitle, avatar, media, supportText, buttons,
    } = props;

    const mediaPart = media.component === 'img' ? (
        <CardMedia
            className={classes.mediaImage}
            image={media.image}
            alt={media.alt}
        />
    ) : (
        <CardMedia
            className={classes.mediaVideo}
            component={media.component}
            src={media.src}
            allowFullScreen
        />
    );

    return (
        <Base
            type="giving"
            title={title}
            subtitle={subtitle}
            avatar={avatar}
            media={mediaPart}
            supportText={supportText}
            buttons={buttons}
        />
    );
}
