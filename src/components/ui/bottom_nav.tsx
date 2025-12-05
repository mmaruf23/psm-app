import { ArrowLeftCircleIcon, HomeIcon, NotebookIcon } from "lucide-react";
import type { JSX } from "react";
import { NavLink } from "react-router";

type Link = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const BottomNav = () => {
  const links: Link[] = [
    { icon: <ArrowLeftCircleIcon />, label: "Before", href: "/before" },
    { icon: <HomeIcon />, label: "Home", href: "/" },
    { icon: <NotebookIcon />, label: "Target", href: "/target" },
  ];

  return (
    <div className="fixed w-full h-10 bottom-0 flex justify-around items-center bg-chart-4 md:hidden">
      {links.map((link, i) => (
        <NavLink to={link.href} key={i} className={({ isActive }) => (isActive ? "text-white" : "text-black")}>
          <div>{link.icon}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
