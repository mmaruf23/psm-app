import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  HomeIcon,
} from 'lucide-react';
import type { JSX } from 'react';
import { NavLink } from 'react-router';

type Link = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const Sidebar = () => {
  const links: Link[] = [
    { label: 'Home', href: '/', icon: <HomeIcon /> },
    {
      label: 'Periode Sebelumnya',
      href: '/before',
      icon: <ArrowLeftCircleIcon />,
    },
    {
      label: 'Target Next Periode',
      href: '/target',
      icon: <ArrowRightCircleIcon />,
    },
  ];
  return (
    <>
      <div className="bg-chart-3 md:block p-4 hidden w-40 md:w-64">
        <ul className="flex flex-col gap-3">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink to={link.href} className="flex gap-2">
                {link.icon}
                <p>{link.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
