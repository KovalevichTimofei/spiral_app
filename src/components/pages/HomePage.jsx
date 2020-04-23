import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import GivingCard from '../Cards/GivingCard';

const useStyles = makeStyles(theme => ({
    content: {
        position: 'fixed',
        paddingTop: theme.spacing(9),
        paddingBottom: theme.spacing(11),
        backgroundColor: theme.palette.grey[100],
        height: '100%',
        overflowY: 'scroll',
    },
}));

export default function HomePage() {
    const classes = useStyles();

    const cards = cardsInfo.map((card) => {
        const {
            key, title, subtitle, avatar, media, supportText, buttons,
        } = card;

        switch (card.type) {
            case 'giving':
                return (
                    <GivingCard
                        key={key}
                        title={title}
                        subtitle={subtitle}
                        avatar={avatar}
                        media={media}
                        supportText={supportText}
                        buttons={buttons}
                    />
                );
            default:
                return null;
        }
    });

    return (
        <Container className={classes.content}>
            {cards}
        </Container>
    );
}

const cardsInfo = [
    {
        key: 'card1',
        type: 'giving',
        title: 'ST Jude',
        subtitle: 'Your giving impact',
        media: {
            component: 'img',
            image: 'img/avatar.jpg',
            alt: 'There should be image here',
        },
        supportText: 'Danny, Your donation heiped four amazing kids got much-needed cancer surgery, thanks for being amazing!',
        buttons: [
            { label: 'Share to spread the word' },
        ],
    },
    {
        key: 'card2',
        type: 'giving',
        title: 'ST Jude',
        subtitle: 'Your giving impact',
        avatar: 'img/avatar.jpg',
        media: {
            component: 'iframe',
            width: '1280',
            height: '720',
            src: 'https://www.youtube.com/embed/qmp2ukmxqmc',
        },
        supportText: 'Danny, Your donation heiped four amazing kids got much-needed cancer surgery, thanks for being amazing!',
        buttons: [
            { label: 'Share to spread the word' },
        ],
    },
];
