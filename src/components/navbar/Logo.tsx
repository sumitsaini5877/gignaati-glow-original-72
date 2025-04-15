
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-3xl font-bold">
        <span className="text-black">gig</span>
        <span className="font-light">naati</span>
      </span>
      <span className="hidden sm:block text-xs text-gignaati-gray mt-auto ml-1">AI AGENTS MARKETPLACE</span>
    </Link>
  );
};

export default Logo;
