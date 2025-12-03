import { ArrowLeftCircleIcon, HomeIcon, NotebookIcon } from 'lucide-react';
import type { JSX } from 'react';
import { NavLink, useLocation } from 'react-router';

type Link = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const BottomNav = () => {
  const pathname = useLocation().pathname;

  const links: Link[] = [
    { icon: <HomeIcon />, label: 'Home', href: '/' },
    { icon: <NotebookIcon />, label: 'Target', href: '/target' },
    { icon: <ArrowLeftCircleIcon />, label: 'Before', href: '/before' },
  ];

  return (
    <div className="absolute w-full h-10 bottom-0 flex justify-around items-center bg-chart-4 md:hidden">
      {links.map((link, i) => (
        <NavLink to={link.href} key={i}>
          <div className={pathname === link.href ? 'text-white' : 'text-black'}>
            {link.icon}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
