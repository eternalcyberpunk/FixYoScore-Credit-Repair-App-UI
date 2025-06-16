import React, { useState } from 'react';
import { BellIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
interface HeaderProps {
  onLogout: () => void;
}
const Header: React.FC<HeaderProps> = ({
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home'
  }, {
    name: 'Disputes',
    path: '/disputes',
    icon: 'file-text'
  }, {
    name: 'Reports',
    path: '/reports',
    icon: 'bar-chart'
  }, {
    name: 'Education',
    path: '/education',
    icon: 'book-open'
  }, {
    name: 'Settings',
    path: '/settings',
    icon: 'settings'
  }];
  return <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center md:hidden">
            <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
            <div className="ml-4 md:hidden">
              <h1 className="text-lg font-bold text-blue-800">FixYoScore</h1>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <BellIcon size={20} />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <button className="p-1 rounded-full bg-gray-200 text-gray-700">
                    <UserIcon size={20} />
                  </button>
                  <button onClick={onLogout} className="ml-3 text-sm text-gray-700 hover:text-blue-600">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-blue-800 text-white">
          <nav className="px-2 pt-2 pb-4">
            <ul>
              {navItems.map(item => <li key={item.path} className="px-2 py-1">
                  <NavLink to={item.path} className={({
              isActive
            }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'}`} onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>)}
            </ul>
          </nav>
        </div>}
    </header>;
};
export default Header;