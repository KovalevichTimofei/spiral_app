import React, { useState, useCallback } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import TopBar from '../components/AppBars/PrimaryBar';
import AppMenu from '../components/Menus/AppMenu';
import BottomBar from '../components/AppBars/BottomBar';

import HomePage from './pages/HomePageContainer';
import AccountsPage from './pages/AccountsPageContainer';

export default function PrimaryLayout() {
    const [isOpen, setOpen] = useState(false);
    const openChange = useCallback(value => setOpen(value));

    return (
        <>
            <TopBar isOpen={isOpen} openChange={openChange} />
            <AppMenu isOpen={isOpen} openChange={openChange} />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/accounts" component={AccountsPage} />
                <Redirect to="/home" />
            </Switch>
            <BottomBar />
        </>
    );
}
