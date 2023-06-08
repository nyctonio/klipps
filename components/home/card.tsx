'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Video = ({ src, height = '250px' }: { src: string; height?: string }) => {
  return (
    <>
      <div>
        <video
          style={{
            height: height,
          }}
          controls
          src={src}
        ></video>
      </div>
    </>
  );
};

export default function Card({
  id,
  title,
  description,
  url,
  upvotes,
  downvotes,
  user,
  height,
}: {
  id: string;
  title: string;
  description: string;
  url: string;
  upvotes: number;
  downvotes: number;
  user: {
    id: string;
    name: string;
    image: string;
  };
  height?: string;
}) {
  const [votes, setVotes] = useState<{
    upvotes: number;
    downvotes: number;
    status: 'upvote' | 'downvote' | '';
  }>({
    upvotes: upvotes,
    downvotes: downvotes,
    status: '',
  });
  const Upvote = async () => {
    if (votes.status == '' || votes.status == 'downvote') {
      setVotes({
        upvotes: votes.upvotes + 1,
        downvotes: votes.downvotes,
        status: 'upvote',
      });
      const res = await fetch('/api/upvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = await res.json();
      console.log('data', data);
      if (data.error) {
        toast.error(data.error);
      }
    }
  };

  const Downvote = async () => {
    if (votes.status == '' || votes.status == 'upvote') {
      setVotes({
        upvotes: votes.upvotes - 1,
        downvotes: votes.downvotes,
        status: 'downvote',
      });
      const res = await fetch('/api/downvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      }
    }
  };

  const Subscribe = () => {};

  return (
    <>
      <div
        className={`flex mb-2 mr-2 ${
          height ? height : 'min-h-[380px] max-h-[380px]'
        }  overflow-hidden  flex-col items-center text-white  rounded-lg p-4 pb-2 border-black border-[1.5px] bg-[#131313]`}
      >
        <Video height={height} src={url} />
        <div className="w-full flex flex-col items-start mt-2 mb-3">
          <div className="w-full flex justify-between">
            <div className="flex space-x-2">
              <button
                onClick={Upvote}
                className={`${
                  votes.status == 'upvote' ? 'bg-green-600' : 'bg-[#444444] '
                } py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase`}
              >
                Upvote {votes.upvotes}
              </button>
              <button
                onClick={Downvote}
                className={`${
                  votes.status == 'downvote' ? 'bg-black' : 'bg-[#444444] '
                }  py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase`}
              >
                Downvote {votes.downvotes}
              </button>
            </div>
            <div>
              <button
                onClick={Subscribe}
                className={`bg-red-600 py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase`}
              >
                @{user.name}
              </button>
            </div>
          </div>
          <Link href={`/video/${id}`} className="hover:text-blue-400 mt-1">
            {title}
          </Link>
          <div>
            <div className="text-xs mt-1">
              {description.length > 100
                ? description.substring(0, 100) + '...'
                : description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
