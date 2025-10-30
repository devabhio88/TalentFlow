import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Briefcase, ClipboardList, Menu, X, LucideClipboardPen} from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Jobs', href: '/jobs', icon: Briefcase },
    { name: 'Candidates', href: '/candidates', icon: Users },
    { name: 'Assessments', href: '/assessments', icon: ClipboardList }
  ];

  const isActive = (href) => location.pathname.startsWith(href);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return <>
    <div className="min-h-screen bg-custom-gradient flex md:flex-col">
      <div className="absolute z-40 bg-white last:bg-white shadow-sm lg:w-[15vw] border-b border-gray-200">
        <div className="w-screen lg:w-[15vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-col items-center gap-10 h-16 w-full">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 mt-4">
                <div className="w-8 h-8 bg-custom-gradient rounded-lg flex items-center justify-center">
                  <img src="/vite.svg" alt="" />
                </div>
                <span className="text-xl font-bold bg-[linear-gradient(to_bottom,hsl(220,85%,25%)_0%,hsl(220,65%,3.52%)_50%,hsl(220,65%,10%)_100%)] bg-clip-text text-transparent tracking-tight select-none"
                >
                Talent<span className="text-blue-500">Flow</span>
                </span>

              </Link>
            </div>
            
            <div className="hidden md:flex flex-col items-start w-full space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center w-full ml-8 space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-white hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
            
            <div className="flex items-center md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                  key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-white hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      <main className="md:ml-60 flex-grow mx-auto w-full max-w-7xl py-4 px-4 sm:px-6 lg:px-6">
        {children}
      </main>
    </div>
    </>
};

export default Layout;