import { Disclosure } from '@headlessui/react';
import { BellIcon, EnvelopeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import MenuIcon from './MenuIcon';
import NavLink from './NavLink';

const navigation = [
  { name: 'Página Inicial', href: '#', current: true },
  { name: 'TOP-MOF', href: '#', current: false },
  { name: 'Marcações', href: '#', current: false },
  { name: 'Loja', href: '#', current: false },
];

const buttons = [
  { icon: BellIcon, name: 'instagram', sr: '', isFirst: true },
  { icon: EnvelopeIcon, name: 'email', sr: '', isFirst: true },
  { icon: ShoppingCartIcon, name: 'cart', sr: '', isFirst: true },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <MenuIcon open={open} />
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                  <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    {
                      navigation.map((item) => <NavLink key={ item.name } item={ item }/> )
                    }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {
                  buttons.map((btn) => (
                    <button key={btn.name} type="button" className="ml-4 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">View notifications</span>
                      <btn.icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  ))
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {
                navigation.map((item) => <NavLink key={ item.name } item={ item } inMenu/> )
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
