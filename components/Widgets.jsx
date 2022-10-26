import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots, BsCameraVideo } from 'react-icons/bs';
import Contact from './Contact';

const contacts = [
  {
    name: 'Ismael',
    src: 'https://avatars.githubusercontent.com/u/68153258?v=4',
    profile: 'https://avatars.githubusercontent.com/u/68153258?v=4',
  },
  {
    name: 'Jeff Besos',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Bill gates',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <BsCameraVideo className="h-6" />
          <AiOutlineSearch className="h-6" />
          <BsThreeDots className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <>
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        </>
      ))}
    </div>
  );
}

export default Widgets;
