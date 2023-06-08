'use client';
// @ts-nocheck
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Video from '@/components/home/card';

const Page = () => {
  const { data: session } = useSession();
  const [videos, setVideos] = useState([]);
  console.log(session);
  useEffect(() => {
    const getVideos = async () => {
      const res = await fetch('/api/videos');
      const data = await res.json();
      console.log(data);
      setVideos(data);
    };
    getVideos();
  }, []);

  if (!session || session == null || session == undefined) {
    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn('google', { callbackUrl: `/` });
          }}
        >
          Sign In
        </button>
      </div>
    );
  }
  return (
    <div className="w-full h-full overflow-scroll">
      <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-black text-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  // @ts-ignore
                  src={session?.user.image}
                  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-4">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide ">
                    2,454
                  </span>
                  <span className="text-sm ">Followers</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide ">
                    10
                  </span>
                  <span className="text-sm ">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl font-bold leading-normal mb-1">
              {/* @ts-ignore */}
              {session?.user.name}
            </h3>
            <div className="text-xs mt-0  pb-10 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2  opacity-75"></i>
              {/* @ts-ignore */}
              {session?.user.email}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h1 className="mb-2">Your Uploaded Videos</h1>
        <div className="grid grid-cols-3 gap-4">
          {videos.map((video: { _id: string; title: any }) => (
            // @ts-ignore
            <Video key={video._id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
