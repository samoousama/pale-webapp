import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-primary font-Sora text-[16px] hover:text-accent">Features</Link>
          <Link to="/" className="text-primary font-Sora text-[16px] hover:text-accent">Real Talk</Link>
          <Link to="/" className="text-primary font-Sora text-[16px] hover:text-accent">Pricing</Link>
          <Link to="/" className="text-primary font-Sora text-[16px] hover:text-accent">FAQ</Link>
        </nav>
        <Button variant="primary" onClick={() => alert("Get Started")}>
            Get Started
        </Button>
      </div>
    </header>
  );
}
