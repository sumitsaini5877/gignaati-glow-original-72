
import { Link } from "react-router-dom";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold">
            <span className="text-black">gig</span>
            <span className="font-light">naati</span>
          </span>
        </Link>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </>
  );
};

export default AuthHeader;
