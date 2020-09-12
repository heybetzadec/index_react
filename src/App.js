import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useImmerReducer } from "use-immer"
import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";
import './util/config/variable'
import 'antd/dist/antd.css';

import translationEN from './util/locales/en/translation.json';
import translationTR from './util/locales/tr/translation.json';


import StateContext from "./util/context/StateContext";
import DispatchContext from "./util/context/DispatchContext";
import LoadingPage from "./components/publicside/layout/LoadingPage";

const HomePage = lazy(() => import('./components/publicside/layout/HomePage'));

const Login = lazy(() => import('./components/dashboard/login/Login'));
const Dashboard = lazy(() => import( './components/dashboard/main/Dashboard'));
const Categories = lazy(() => import('./components/dashboard/category/Categories'));
const CategoryDetail = lazy(() => import('./components/dashboard/category/CategoryDetail'));
const Posts = lazy(() => import( './components/dashboard/post/Posts'));
const PostDetail = lazy(() => import( './components/dashboard/post/PostDetail'));
const Slider = lazy(() => import( './components/dashboard/slider/Slider'));
const SliderDetail = lazy(() => import( './components/dashboard/slider/SliderDetail'));
const Users = lazy(() => import( './components/dashboard/user/Users'));
const UserDetails = lazy(() => import( './components/dashboard/user/UserDetails'));
const Roles = lazy(() => import( './components/dashboard/role/Roles'));
const RoleDetail = lazy(() => import( './components/dashboard/role/RoleDetail'));
const Setting = lazy(() => import( './components/dashboard/setting/Setting'));
const DashboardLoading = lazy(() => import( './components/dashboard/layout/DashboardLoading'));


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
                    <Suspense fallback={<LoadingPage />}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path={global.final.dashboardPath} exact>
                                <Dashboard title={t('dashboard')} menuKey={'1'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/categories'}>
                                <Categories title={t('categories')} menuKey={'2'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/category/add'}>
                                <CategoryDetail title={t('add_category')} menuKey={'2'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/category/edit/id/:id'}>
                                <CategoryDetail title={t('edit_category')}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/posts'}>
                                <Posts title={t('posts')} menuKey={'3'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/posts/add'}>
                                <PostDetail title={t('add_post')} menuKey={'3'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/posts/edit/id/:id'}>
                                <PostDetail title={t('edit_post')} menuKey={'3'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/slider'}>
                                <Slider title={t('slider')} menuKey={'4'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/slider/add'}>
                                <SliderDetail title={t('add_slider')} menuKey={'4'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/slider/edit/id/:id'}>
                                <SliderDetail title={t('edit_slider')} menuKey={'4'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/users'}>
                                <Users title={t('users')} menuKey={'5'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/user/add'}>
                                <UserDetails title={t('add_user')} menuKey={'5'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/slider/edit/id/:id'}>
                                <UserDetails title={t('edit_user')} menuKey={'5'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/roles'}>
                                <Roles title={t('roles')} menuKey={'6'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/role/add'}>
                                <RoleDetail title={t('add_role')} menuKey={'6'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/role/edit/id/:id'}>
                                <RoleDetail title={t('edit_role')} menuKey={'6'}/>
                            </Route>
                            <Route path={global.final.dashboardPath+'/setting'}>
                                <Setting title={t('setting')} menuKey={'7'}/>
                            </Route>
                            <Route path={global.final.dashboardPath + '/*'}>
                                <DashboardLoading title={'...'}/>
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
             </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export default App;
