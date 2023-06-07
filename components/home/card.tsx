'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Video = ({ src }: { src: string }) => {
  return (
    <>
      <div className="w-full h-full">
        <video
          style={{
            width: '100%',
            height: '100%',
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
        downvotes: votes.downvotes - 1,
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
        downvotes: votes.downvotes + 1,
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
      <div className="flex mb-2 mr-2 h-[360px] w-[400px] flex-col items-center text-white  rounded-lg p-4 pb-2 border-black border-[1.5px] bg-[#131313]">
        <Video src={url} />
        <div className="w-full flex flex-col items-start mt-4 mb-3">
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
          <dl>
            <div className="mt-1">{title}</div>
          </dl>
          <dl>
            <div className="text-xs mt-1">
              {description.length > 100
                ? description.substring(0, 100) + '...'
                : description}
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
