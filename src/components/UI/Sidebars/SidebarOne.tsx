import Link from "next/link";
import { Nav } from "react-bootstrap";

const SidebarOne = ({ navData }: Props) => {
  return (
    <div className="sidebarOne">
      <Nav defaultActiveKey="/dashboard" className="flex-column gap-5 p-4">
        {navData.map((item, i) => {
          const Icon = item.Icon;

          return (
            <Nav.Link className="nav-link">
              <Icon />
              <Link href={item.route}>{item.text}</Link>
            </Nav.Link>
          );
        })}
      </Nav>
    </div>
  );
};

interface Props {
  navData: NavLink[];
}

export interface NavLink {
  Icon: React.FC;
  route: string;
  text: string;
}

export default SidebarOne;
