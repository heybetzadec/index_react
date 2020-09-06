import React, {useEffect, useState} from 'react';
import '../../../util/config/variable'
import '../../../App.css'

import {Layout} from 'antd';

import DashboardPage from "../layout/DashboardPage";




const { Content } = Layout;

const Dashboard = (props) => {


    return (
        <DashboardPage title={props.title}>
            Dashboard
        </DashboardPage>
    )
};

export default Dashboard;