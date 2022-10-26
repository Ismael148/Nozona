import { useSession } from 'next-auth/react';
import React from 'react';
import {
  BsChevronDown,
  BsFillCalendarEventFill,
  BsFillClockFill,
} from 'react-icons/bs';
import { HiShoppingBag, HiUserGroup, HiUsers } from 'react-icons/hi';
import { RiComputerFill } from 'react-icons/ri';
import SidebarRow from './SidebarRow';

function Sidebar() {
  const { data: session, loading } = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />

      <SidebarRow Icon={HiUsers} title="Friends" />
      <SidebarRow Icon={HiUserGroup} title="Groups" />
      <SidebarRow Icon={HiShoppingBag} title="Marketplace" />
      <SidebarRow Icon={RiComputerFill} title="Watch" />
      <SidebarRow Icon={BsFillCalendarEventFill} title="Events" />
      <SidebarRow Icon={BsFillClockFill} title="Memories" />
      <SidebarRow Icon={BsChevronDown} title="See more" />
    </div>
  );
}

export default Sidebar;
