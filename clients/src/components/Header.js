
import { Disclosure } from '@headlessui/react';

import { NavLink } from 'react-router-dom';



const navigation = [
    { name: 'Edit Data Players', href: '/Players' },

];   


export default function Header(props) {
   

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-14">
                                
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {/*className={classNames(
                                                    item.current
                                                        ? 'no-underline '
                                                        : 'no-underline',
                                                    ''
                                                )}*/}
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={({
                                                        isActive,
                                                    }) => {
                                                        return (
                                                            'px-6 py-5 rounded-md text-sm font-medium no-underline ' +
                                                            (!isActive
                                                                ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                                                : 'bg-gray-900 text-white')
                                                        );
                                                    }}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                           
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className={({ isActive }) => {
                                            return (
                                                'block px-3 py-2 rounded-md text-base font-medium no-underline ' +
                                                (!isActive
                                                    ? ' text-gray-300 hover:bg-gray-700 hover:text-black'
                                                    : 'bg-gray-900 text-black')
                                            );
                                        }}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                               
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="bg-gray-300">
                <div className="max-w-7xl mx-auto min-h-screen px-3 py-2">
                    {props.children}
                </div>
            </div>
        </>
    );
}

