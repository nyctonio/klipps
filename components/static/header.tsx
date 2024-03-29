'use client';
import Image from 'next/image';
import Notifications from '@/components/notification';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <div className="w-full h-[50%] px-4 flex items-center justify-between overflow-hidden bg-[#131313]">
        <div>
          <Image src="/klipps.svg" alt="img" height={80} width={100} />
        </div>
        <div className="flex space-x-2 items-center">
          <div>
            <Notifications />
          </div>
          <div className="text-white font-bold uppercase hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] bg-[#444444] cursor-pointer px-3 py-[5px] rounded-sm text-xs">
            {session ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </button>
            ) : (
              <Link href="/login">Sign In</Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[50%] px-4 flex items-center justify-between overflow-hidden bg-[#444444]">
        <div className="flex items-center space-x-4">
          <div className="bg-[#131313] py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase">
            <Link href={'/'}>Home</Link>
          </div>
          <div className="bg-[#131313] py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold">
            @channel
          </div>
        </div>
        <div className="flex justify-end w-[70%] space-x-4 items-center">
          <input
            type="text"
            className="bg-[#585858] px-4 outline-none border-[1px] w-[40%] py-1 border-black rounded-sm"
          />
          <div className="bg-[#131313] py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase">
            Search
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
