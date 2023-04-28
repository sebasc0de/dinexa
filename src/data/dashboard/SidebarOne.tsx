import { IoIosLogOut } from "react-icons/io";
import { AiFillWindows } from "react-icons/ai";
import { RiWalletLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "../../components/UI/Sidebars/SidebarOne";

export const data: NavLink[] = [
  {
    Icon: AiFillWindows,
    route: "/dashboard",
    text: "dashboard",
  },
  {
    Icon: AiOutlineThunderbolt,
    route: "/get-started",
    text: "start",
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
