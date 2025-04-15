
import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <div className="text-center text-xs text-gray-500 mt-6">
      <div className="space-x-1">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <span>•</span>
        <Link to="/terms" className="hover:underline">Terms of Service</Link>
        <span>•</span>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
    </div>
  );
};

export default AuthFooter;
