import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useImmerReducer } from "use-immer"
import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";
import './util/config/variable'
import 'antd/dist/antd.css';

import translationEN from './util/locales/en/translation.json';
import translationTR from './util/locales/tr/translation.json';

import HomePage from './components/publicside/layout/HomePage';
import DashboardPage from './components/dashboard/layout/DashboardPage';
import StateContext from "./util/context/StateContext";
import DispatchContext from "./util/context/DispatchContext";


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            tr: {
                translation: translationTR
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    }).then(r => {

});


function App() {
    const {t} = useTranslation();

    const initialState = {
        theme: 'light',
        user: {
            token: localStorage.getItem("complexappToken"),
            username: localStorage.getItem("complexappUsername"),
            avatar: localStorage.getItem("complexappAvatar")
        },
        loggedIn: Boolean(localStorage.getItem("complexappToken")),
    }

    function ourReducer(draft, action) {
        switch (action.type) {
            case "login":
                draft.loggedIn = true
                draft.user = action.data
                return
            case "logout":
                draft.loggedIn = false
                return
            case "changeTheme":
                draft.theme = draft.theme === 'light' ? 'dark' : 'light'
                console.log(draft.theme)
                return
            default:
        }
    }

    const [state, dispatch] = useImmerReducer(ourReducer, initialState)

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path={global.final.dashboardPath}>
                            <DashboardPage title={t('dashboard')}/>
                        </Route>
                    </Switch>
                </Router>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export default App;
