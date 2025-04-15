
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Careers", url: "/careers" },
        { name: "Press", url: "/press" }
      ]
    },
    {
      title: "For Clients",
      links: [
        { name: "Find AI Agents", url: "/browse-gigs" },
        { name: "Client Success Stories", url: "/success-stories" },
        { name: "Resources", url: "/resources" }
      ]
    },
    {
      title: "For Freelancers",
      links: [
        { name: "Post a Gig", url: "/post-gig" },
        { name: "Community", url: "/community" },
        { name: "Freelancer FAQ", url: "/support" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", url: "/support" },
        { name: "Contact Us", url: "/contact" },
        { name: "Trust & Safety", url: "/trust" },
        { name: "Accessibility", url: "/accessibility" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Github, url: "https://github.com" },
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Instagram, url: "https://instagram.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">gig</span>
                <span className="text-gignaati-coral">naati</span>
              </span>
            </div>
            <p className="text-gray-400">© {currentYear} Gignaati. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
