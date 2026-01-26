import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2 text-2xl font-heading font-bold">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-14 w-14 border-2 border-white rounded-full"
            />
            Street Side
          </div>

          <div className="hidden md:flex gap-8 text-lg font-medium">
            <a href="#menu" className="hover:text-secondary transition-colors">Menu</a>
            <a href="#location" className="hover:text-secondary transition-colors">Location</a>
            <a href="#socialmedia" className="hover:text-secondary transition-colors">Social Media</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-primary pb-4 space-y-2 z-50">
          <a
            href="#menu"
            className="block py-2 px-4 hover:bg-white/10 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a
            href="#location"
            className="block py-2 px-4 hover:bg-white/10 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Location
          </a>
          <a
            href="#social"
            className="block py-2 px-4 hover:bg-white/10 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Social Media
          </a>
        </div>
      )}
    </nav>
  );
}
