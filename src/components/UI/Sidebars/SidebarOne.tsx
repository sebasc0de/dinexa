import Link from "next/link";
import { Nav } from "react-bootstrap";
import { AiFillWindows } from "react-icons/ai";
import { RiWalletLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const SidebarOne = (data: NavLink[]) => {
  return (
    <div className="sidebarOne">
      <Nav defaultActiveKey="/dashboard" className="flex-column gap-5 p-4">
        <Nav.Link className="nav-link active">
          <AiFillWindows />
          <Link href="/dashboard">Dashboard</Link>
        </Nav.Link>

        <Nav.Link>
          <RiWalletLine />
          <Link href="/dashboard">Wallet</Link>
        </Nav.Link>

        <Nav.Link>
          <IoSettingsOutline />
          <Link href="/dashboard">Settings</Link>
        </Nav.Link>

        <Nav.Link>
          <IoIosLogOut />
          <Link href="/dashboard">Cerrar sesion</Link>
        </Nav.Link>
      </Nav>
    </div>
  );
};

interface NavLink {
  icon: React.FC;
  route: string;
  text: string;
}

export default SidebarOne;
