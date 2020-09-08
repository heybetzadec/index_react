import React from 'react';
import {Spin} from "antd";
import DashboardLoading from "../../dashboard/layout/DashboardLoading";

const LoadingPage = props => {
    if (window.location.href.includes(global.final.dashboardPath))
        return <DashboardLoading/>
    else
        return (
            <>
                <Spin size="large" />
            </>
        )
};

export default LoadingPage;