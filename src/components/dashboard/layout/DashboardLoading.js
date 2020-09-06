import React from 'react';
import DashboardPage from "./DashboardPage";
import {Spin} from "antd";

const DashboardLoading = (props) => {
    return (
        <DashboardPage title={props.title}>
            <Spin size="large" />
        </DashboardPage>
    )
};

export default DashboardLoading;