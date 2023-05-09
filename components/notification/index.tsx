'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropdownMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
        <DropdownMenu.Trigger asChild>
          <div className="text-white font-bold uppercase hover:shadow-[1px_1px_0px_0px_rgba(0,0,0)] bg-[#444444] p-[5px]  cursor-pointer rounded-full text-xs">
            <svg
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#fff"
            >
              <path
                fillRule="evenodd"
                d="M12 1C8.318 1 5 3.565 5 7v4.539a3.25 3.25 0 01-.546 1.803l-2.2 3.299A1.518 1.518 0 003.519 19H8.5a3.5 3.5 0 107 0h4.982a1.518 1.518 0 001.263-2.36l-2.2-3.298A3.25 3.25 0 0119 11.539V7c0-3.435-3.319-6-7-6zM6.5 7c0-2.364 2.383-4.5 5.5-4.5s5.5 2.136 5.5 4.5v4.539c0 .938.278 1.854.798 2.635l2.199 3.299a.017.017 0 01.003.01l-.001.006-.004.006-.006.004-.007.001H3.518l-.007-.001-.006-.004-.004-.006-.001-.007.003-.01 2.2-3.298a4.75 4.75 0 00.797-2.635V7zM14 19h-4a2 2 0 104 0z"
              ></path>
            </svg>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="z-20 -ml-10"
            side="bottom"
            align="start"
            sideOffset={10}
            alignOffset={-155}
          >
            <div></div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default Index;
