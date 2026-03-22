import { NavLink } from "react-router-dom";

type NavItem = {
  href: "/" | "/about" | "/developments" | "/contact";
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/developments", label: "Developments" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

function TopNav() {
  return (
    <nav>
      <div className="nav-logo">
        <img
          src="/images/logo.jpeg"
          alt="Argus Panoptes"
          style={{ height: "40px", width: "auto", verticalAlign: "middle" }}
        />
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TopNav;
