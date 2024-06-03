import React from 'react';
import { Tab, TabGroup, TabList } from '@headlessui/react';
import NavBarUser from './NavBarUser';
import NavBarItem from '@/types/NavBarItem';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';

const NavBar: React.FC = () => {
  const items = GetItems();

  return (
    <nav className="container relative mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <Logo className="size-6 fill-primary" />
        </div>
        <TabGroup>
          <TabList className="gap-1">
            {items.map(({ id, label }) => {
              return <Tab key={id}>{label}</Tab>;
            })}
          </TabList>
        </TabGroup>
        <div>
          <NavBarUser />
        </div>
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
