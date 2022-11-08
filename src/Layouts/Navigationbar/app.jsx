import React from "react";
import {AdminName, AdminWrap, BellIcon, Logo, Navigationbar, NavLeft, NotificationAmount, RightWrapper} from "./style";
import { ReactComponent as NotificationSvg } from "../../Assets/assets/main/Notification.svg";
import { ReactComponent as AdminSvg } from "../../Assets/assets/sidebars/icon-личный кабинет.svg";

const Navbar = () => {


    return (
        <Navigationbar>
            <RightWrapper>
                <Logo>
                    <div>LOGO</div>
                </Logo>
                <BellIcon>
                    <NotificationSvg/>
                    <NotificationAmount>1</NotificationAmount>
                </BellIcon>
            </RightWrapper>
            <NavLeft>
                <AdminName>
                    личный кабинет
                </AdminName>
                <AdminWrap>
                    <AdminSvg/>
                </AdminWrap>
            </NavLeft>

        </Navigationbar>
    )
}
export default Navbar