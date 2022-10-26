import React from 'react';
import Image from 'next/image';
import logo from '../assets/favicon.png';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  return (
    <>
      <div className="grid place-items-center mt-40">
        <Image
          src={logo}
          height={100}
          width={100}
          alt="User"
          objectFit="contain"
        />
        <h1
          onClick={() => signIn()}
          className="p-5 mt-10 bg-blue-500 rounded-full text-white text-center cursor-pointer"
        >
          Login with Facebook
        </h1>
      </div>
    </>
  );
}
