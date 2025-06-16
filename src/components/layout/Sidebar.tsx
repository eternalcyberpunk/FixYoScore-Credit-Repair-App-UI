import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, FileTextIcon, BarChart3Icon, BookOpenIcon, SettingsIcon } from 'lucide-react';
const Sidebar = () => {
  const navItems = [{
    name: 'Dashboard',
    path: '/dashboard',
    icon: <HomeIcon size={20} />
  }, {
    name: 'Disputes',
    path: '/disputes',
    icon: <FileTextIcon size={20} />
  }, {
    name: 'Reports',
    path: '/reports',
    icon: <BarChart3Icon size={20} />
  }, {
    name: 'Education',
    path: '/education',
    icon: <BookOpenIcon size={20} />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon size={20} />
  }];
  return <div className="hidden md:flex md:flex-col w-64 bg-blue-800 text-white">
      <div className="p-4 flex items-center justify-center border-b border-blue-700">
        <h1 className="text-xl font-bold">FixYoScore</h1>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {navItems.map(item => <li key={item.path} className="px-2 py-1">
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center px-4 py-3 text-sm rounded-lg transition-colors ${isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'}`}>
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 text-sm text-blue-200">
        <p>© 2023 FixYoScore</p>
      </div>
    </div>;
};
export default Sidebar;