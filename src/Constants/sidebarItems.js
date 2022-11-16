import {ReactComponent as DashboardSvg} from "../Assets/assets/sidebars/icon-главная.svg";
import {ReactComponent as OrdersSvg} from "../Assets/assets/sidebars/icon-заказы.svg";
import {ReactComponent as ProductsSvg} from "../Assets/assets/sidebars/Bag.svg";
import {ReactComponent as CommentsSvg} from "../Assets/assets/sidebars/icon-отзывы.svg";
import {ReactComponent as CheckoutSvg} from "../Assets/assets/sidebars/Buy.svg";

// icon-личный кабинет.svg
export const SidebarItems  = [
    {
        id:1,
        name:`главная`,
        link:`/`,
        icon:<DashboardSvg/>
    },
    {
        id:2,
        name:`заказы`,
        link:`/orders`,
        icon:<ProductsSvg/>
    },
    {
        id:3,
        name:`курсы`,
        link:`/courses`,
        icon:<OrdersSvg/>
    },
    {
        id:4,
        name:`отзывы`,
        link:`/comments`,
        icon:<CommentsSvg/>
    },
    {
        id:5,
        name:`оформить заказ`,
        link:`/checkout`,
        icon:<CheckoutSvg/>
    },

]