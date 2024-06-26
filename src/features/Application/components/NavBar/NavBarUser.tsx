import React from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

const NavBarUser: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <MenuButton className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-gray-800">
                  <span>Options</span>
                  <svg
                    className="-mr-1 ml-2 size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MenuButton>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems
                  static
                  className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="truncate text-sm font-medium leading-5 text-gray-900">
                      tom@example.com
                    </p>
                  </div>

                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#account-settings"
                          className={`${
                            focus
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                        >
                          Account settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#support"
                          className={`${
                            focus
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                        >
                          Support
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem
                      as="span"
                      disabled
                      className="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50"
                    >
                      New feature (soon)
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#license"
                          className={`${
                            focus
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                        >
                          License
                        </a>
                      )}
                    </MenuItem>
                  </div>

                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#sign-out"
                          className={`${
                            focus
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          } flex w-full justify-between px-4 py-2 text-left text-sm leading-5`}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default NavBarUser;
