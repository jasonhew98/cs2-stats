import React from 'react';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import NavBarUser from './NavBarUser';
import NavBarItem from '@/types/NavBarItem';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';

const NavBar: React.FC = () => {
  const items = GetItems();

  return (
    <nav className="container relative mx-auto p-6">
      <div>
        <Logo className="fill-primary size-6" />
      </div>
      <div className="flex items-center justify-between">
        <TabGroup>
          <TabList>
            {items.map(({ id, label }) => {
              return <Tab key={id}>{label}</Tab>;
            })}
          </TabList>
        </TabGroup>
      </div>
      <div>
        <NavBarUser />
      </div>
    </nav>
  );
};

function GetItems(): NavBarItem[] {
  return [
    {
      id: 1,
      label: 'Dashboard',
      action: () => console.log('Dashboard'),
    },
    {
      id: 2,
      label: 'Inventory',
      action: () => console.log('Inventory'),
    },
    {
      id: 3,
      label: 'Settings',
      action: () => console.log('Settings'),
    },
  ];
}

export { NavBar };
