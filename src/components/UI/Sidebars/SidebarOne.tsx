import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const SidebarOne = ({ navData }: Props) => {
  const route = useRouter().route;
  const { t } = useTranslation(["sidebars"]);

  return (
    <div className="sidebarOne d-none d-md-block">
      <Nav
        defaultActiveKey="/dashboard"
        className="verticalNavigation flex-column gap-5 p-4"
      >
        {navData.map((item, i) => {
          const NAV_ACTIVE = item.route === route && "active";
          const Icon = item.Icon;

          return (
            <Link
              key={item.text}
              className={`nav-link ${NAV_ACTIVE}`}
              href={item.route}
            >
              <Icon />
              {t(`dashboard.${item.text}`)}
            </Link>
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
