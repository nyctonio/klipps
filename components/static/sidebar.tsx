'use client';
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiSettings4Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { FiMessageSquare, FiFolder, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const menus = [
    { name: 'Account', link: '/', icon: MdOutlineDashboard },
    { name: 'Channel', link: '/', icon: AiOutlineUser },
    { name: 'Messages', link: '/', icon: FiMessageSquare },
    { name: 'Views', link: '/', icon: TbReportAnalytics, margin: true },
    // { name: 'File Manager', link: '/', icon: FiFolder },
    // { name: 'Cart', link: '/', icon: FiShoppingCart },
    { name: 'Saved', link: '/', icon: AiOutlineHeart, margin: true },
    { name: 'Settings', link: '/', icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex h-full gap-6">
      <div
        className={`bg-[#0e0e0e] flex flex-col pb-4 ${
          open ? 'w-64' : 'w-16'
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex h-full flex-col justify-between gap-4 relative">
          <div className="flex flex-col">
            {menus?.map((menu, i) => (
              <div
                className={` ${
                  menu?.margin && 'mt-5'
                } group flex items-center text-sm  gap-3.5 p-2 hover:bg-[#444444] cursor-pointer rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  className={`whitespace-pre ${
                    !open && 'opacity-0 overflow-hidden'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-14 bg-white  whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:w-fit`}
                >
                  {menu?.name}
                </h2>
              </div>
            ))}
          </div>
          <div>
            <hr />
            <div className="text-md my-2">Subscribed</div>
            <div
              className={`${
                open ? ' py-1' : 'justify-center px-[2px] py-[2px]'
              } flex text-red-700  rounded-md items-center`}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                </svg>
              </div>
              <div className={`${open ? '' : 'hidden'} text-white`}>Ritesh</div>
            </div>
            <div
              className={`${
                open ? ' py-1' : 'justify-center px-[2px] py-[2px]'
              } flex text-red-700  rounded-md items-center`}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                </svg>
              </div>
              <div className={`${open ? '' : 'hidden'} text-white`}>
                Theo - Ping.gg
              </div>
            </div>
            <div
              className={`${
                open ? ' py-1' : 'justify-center px-[2px] py-[2px]'
              } flex text-red-700  rounded-md items-center`}
            >
              <div>
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                </svg>
              </div>
              <div className={`${open ? '' : 'hidden'} text-white`}>Prime</div>
            </div>
            {/* <div
              className={`bg-[#444444] space-y-2 ${
                open ? 'px-2 py-2' : 'px-1 py-1'
              } text-xs overflow-hidden rounded-md`}
            >
              <div className={`text-[12px] ${open ? '' : 'hidden'} uppercase`}>
                Subscribed
              </div>
              <div
                className={`${
                  open ? ' px-2 py-1' : 'justify-center px-[2px] py-[2px]'
                } flex text-red-700 bg-[#0e0e0e]  rounded-md items-center`}
              >
                <div>
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                  </svg>
                </div>
                <div className={`${open ? '' : 'hidden'} text-white`}>
                  Ritesh
                </div>
              </div>
              <div
                className={`${
                  open ? ' px-2 py-1' : 'justify-center px-[2px] py-[2px]'
                } flex text-green-700 bg-[#0e0e0e]  rounded-md items-center`}
              >
                <div>
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                  </svg>
                </div>
                <div className={`${open ? '' : 'hidden'} text-white`}>
                  Theo - ping.gg
                </div>
              </div>
              <div
                className={`${
                  open ? ' px-2 py-1' : 'justify-center px-[2px] py-[2px]'
                } flex text-blue-700 bg-[#0e0e0e]  rounded-md items-center`}
              >
                <div>
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
                  </svg>
                </div>
                <div className={`${open ? '' : 'hidden'} text-white`}>
                  primegon
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="m-3  w-full">{children}</div>
    </section>
  );
};

export default Sidebar;
