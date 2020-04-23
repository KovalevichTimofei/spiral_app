/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import PrimaryLayout from './containers/PrimaryLayout';

const theme = createMuiTheme({
    palette: {
        primary: { main: 'rgb(216, 50, 117)' },
        secondary: { main: 'rgb(51, 56, 61)' },
        darkSeaGreen: { main: 'rgb(14, 153, 77)' },
        darkMintGreen: { main: 'rgb(28, 189, 102)' },
        blueGrey: { main: 'rgb(141, 149, 157)' },
        brownishGrey: { main: 'rgb(110, 110, 110)' },
    },
    typography: {
        fontSizes: {
            text14: '14px',
            text16: '16px',
            text18: '18px',
            text22: '22px',
            text24: '24px',
            text32: '32px',
        },
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                {console.log(process.env.NODE_ENV)}
                <Route path="/" component={PrimaryLayout} />
            </Switch>
        </Router>
    </ThemeProvider>, document.getElementById('root'),
);
