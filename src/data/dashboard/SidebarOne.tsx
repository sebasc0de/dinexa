import { AiFillWindows } from "react-icons/ai";
import { RiWalletLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "../../components/UI/Sidebars/SidebarOne";

export const data: NavLink[] = [
  {
    Icon: AiFillWindows,
    route: "/dashboard",
    text: "dashboard",
  },
  {
    Icon: RiWalletLine,
    route: "/wallet",
    text: "wallet",
  },
  {
    Icon: IoSettingsOutline,
    route: "/settings",
    text: "settings",
  },
  {
    Icon: IoIosLogOut,
    route: "/logout",
    text: "logout",
  },
];
