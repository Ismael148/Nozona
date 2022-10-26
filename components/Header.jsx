import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';
import { FiSearch } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import { FaFlag } from 'react-icons/fa';
import {
  BsFillCollectionPlayFill,
  BsChatFill,
  BsChevronDown,
} from 'react-icons/bs';
import { HiShoppingBag, HiUserGroup, HiViewGrid, HiBell } from 'react-icons/hi';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();
  return (
    <>
      {/* header Left */}
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        <div className="flex items-center">
          <Image src={logo} width={40} height={40} alt="logo" layout="fixed" />
          <div className="flex ml-2 item-center rounded-full bg-gray-100 p-2">
            <FiSearch className="h-6 text-gray-600" />
            <input
              type="text"
              placeholder="Search nozone"
              className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink"
            />
          </div>
        </div>

        {/* header center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={AiFillHome} />
            <HeaderIcon Icon={FaFlag} />
            <HeaderIcon Icon={BsFillCollectionPlayFill} />
            <HeaderIcon Icon={HiShoppingBag} />
            <HeaderIcon Icon={HiUserGroup} />
          </div>
        </div>

        {/* Header Right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* Profile pic */}
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            alt="user"
          />
          <p className=" whitespace-nowrap font-semibold pr-3">
            {session.user.name}
          </p>
          <HiViewGrid className="icon" />
          <BsChatFill className="icon" />
          <HiBell className="icon" />
          <BsChevronDown className="icon" />
        </div>
      </div>
    </>
  );
}

export default Header;
