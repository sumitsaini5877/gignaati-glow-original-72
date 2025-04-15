
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIGigs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/browse-gigs');
  }, [navigate]);

  return null; // This component will immediately redirect
};

export default AIGigs;
