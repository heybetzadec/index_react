import React, {useEffect} from 'react';
import '../../../util/config/variable'
import DashboardContainer from "./DashboardContainer";
import LeftMenu from "./LeftMenu";

const DashboardPage = (props) => {

    useEffect(() => {
        document.title = `${props.title} | ${global.final.appName}`
    }, [props.title])

    return (
        <>
            <LeftMenu />
            <DashboardContainer>{props.children}</DashboardContainer>
        </>
    )
};

export default DashboardPage;