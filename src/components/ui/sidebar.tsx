import { ArrowLeftCircleIcon, ArrowRightCircleIcon, HomeIcon } from "lucide-react";
import type { JSX } from "react";
import { NavLink } from "react-router";

type Link = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const Sidebar = () => {
  const links: Link[] = [
    { label: "Home", href: "/", icon: <HomeIcon /> },
    {
      label: "Periode Sebelumnya",
      href: "/before",
      icon: <ArrowLeftCircleIcon />,
    },
    {
      label: "Target Next Periode",
      href: "/target",
      icon: <ArrowRightCircleIcon />,
    },
  ];
  return (
    <>
      <div className="md:block pt-10 pl-8 hidden w-40 md:w-60 lg:w-72">
        <ul className="flex flex-col gap-5">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? "text-white font-semibold" : "text-black")}
              >
                <div className="flex gap-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
