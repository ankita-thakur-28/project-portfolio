import { useState } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'project', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626] shrink-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-center relative">
        {/* Desktop Navigation - Centered with Original Underline & Hover Style */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer rounded-lg ${
                  isActive
                    ? 'text-orange-400 font-medium'
                    : 'text-slate-300 hover:text-white hover:bg-[#121212]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute right-4 p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#121212] cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0a0a0a] border-b border-[#262626] px-4 py-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-orange-500/15 text-orange-400 border-l-4 border-orange-500 font-semibold'
                    : 'text-slate-300 hover:bg-[#121212] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
