
import { Link } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'AI Gigs', path: '/browse-gigs' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`${
            mobile ? 'block py-2 hover:bg-gray-50 px-2' : ''
          } text-gray-800 hover:text-gignaati-coral transition-colors`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
