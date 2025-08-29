import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { SIGNUP_FORM_LINK } from "../../App";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src="/Logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav className="sm:flex space-x-6 sm:hidden">
          <Link to="#features" onClick={() => handleScroll("features")} className="text-primary font-Sora text-[16px] font-normal hover:text-accent">Features</Link>
          <Link to="#realtalk" onClick={() => handleScroll("realtalk")} className="text-primary font-Sora text-[16px] font-normal hover:text-accent">Real Talk</Link>
          <Link to="#pricing" onClick={() => handleScroll("pricing")} className="text-primary font-Sora text-[16px] font-normal hover:text-accent">Pricing</Link>
          <Link to="#faq" onClick={() => handleScroll("faq")} className="text-primary font-Sora text-[16px] font-normal hover:text-accent">FAQ</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href={SIGNUP_FORM_LINK + "?utm_source=website&utm_medium=navbar&utm_campaign=signup"} target="_blank">
            <Button variant="primary">
                Sign up to waitlist
            </Button>
          </a>
          <button
            className="hidden p-2 rounded-md hover:bg-gray-100 sm:block"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="hidden sm:block bg-white border-t sm:absolute w-full z-40 shadow-sm">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link to="/" onClick={() => handleScroll("features")} className="text-primary font-Sora text-[16px] hover:text-accent">Features</Link>
            <Link to="/" onClick={() => handleScroll("realtalk")} className="text-primary font-Sora text-[16px] hover:text-accent">Real Talk</Link>
            <Link to="/" onClick={() => handleScroll("pricing")} className="text-primary font-Sora text-[16px] hover:text-accent">Pricing</Link>
            <Link to="/" onClick={() => handleScroll("faq")} className="text-primary font-Sora text-[16px] hover:text-accent">FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
