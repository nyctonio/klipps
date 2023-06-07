import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/home/card';

const Notifications = () => {
  return (
    <>
      <div className="bg-[#000] rounded-md px-4 py-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold text-white">Explore Categories</p>
          <p className="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipis
          </p>
        </div>
      </div>
      <div className="shadow-xl bg-[#000] mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
        <div className="pt--10 pr-0 pb-10 pl-0">
          <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                  src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                  className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-white truncate">
                    Codevloution
                  </p>
                  <p className="text-gray-600 text-md">Education</p>
                </div>
              </div>
              <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                <a
                  href=""
                  className="px-2 py-[4px] text-sm font-medium bg-red-600 text-gray-100 transition-all
                    duration-200 rounded-md"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-1 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                  src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                  className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-white truncate">
                    Dude Perfect
                  </p>
                  <p className="text-gray-600 text-md">Entertainment</p>
                </div>
              </div>
              <div
                className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
              >
                <a
                  href=""
                  className="px-2 py-[4px] text-sm font-medium bg-red-600 text-gray-100 transition-all
                  duration-200 rounded-md"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-1 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                  src="https://djmag.com/sites/default/files/article/image/Spotify.png"
                  className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-white truncate">
                    Nirvana
                  </p>
                  <p className="text-gray-600 text-md">Music</p>
                </div>
              </div>
              <div
                className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
              >
                <a
                  href=""
                  className="px-2 py-[4px] text-sm font-medium bg-red-600 text-gray-100 transition-all
                  duration-200 rounded-md"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-1 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                  src="https://miro.medium.com/max/512/1*n81Kr3UGUVsF0LLRgRQrJw.jpeg"
                  className="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-white truncate">MKBHD</p>
                  <p className="text-gray-600 text-md">Tech</p>
                </div>
              </div>
              <div
                className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
              >
                <a
                  href=""
                  className="px-2 py-[4px] text-sm font-medium bg-red-600 text-gray-100 transition-all
                  duration-200 rounded-md"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className="pt-5 pr-0 pb-0 pl-0 mt-1 mr-0 mb-0 ml-0">
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
              <div className="flex items-center flex-1 min-w-0">
                <img
                  src="https://i.pinimg.com/originals/96/02/08/9602083f42463bb813399310d72233c5.png"
                  className="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                />
                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                  <p className="text-lg font-bold text-white truncate">
                    Peter McKinnon
                  </p>
                  <p className="text-gray-600 text-md">Photography</p>
                </div>
              </div>
              <div
                className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0"
              >
                <a
                  href=""
                  className="px-2 py-[4px] text-sm font-medium bg-red-600 text-gray-100 transition-all
                  duration-200 rounded-md"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Trending = () => {
  return (
    <div className="bg-[#0e0e0e] rounded-lg overflow-hidden shadow-lg">
      <div className="flex">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold text-white">
            Germany trends
          </h2>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-white hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </a>
        </div>
      </div>

      <hr className="border-gray-800" />

      <div className="flex">
        <div className="flex-1">
          <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
            1 . Trending
          </p>
          <h2 className="px-4 ml-2 w-48 font-bold text-white">#Microsoft363</h2>
          <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
            5,466 Tweets
          </p>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-800" />

      <div className="flex">
        <div className="flex-1">
          <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
            2 . Politics . Trending
          </p>
          <h2 className="px-4 ml-2 w-48 font-bold text-white">#HI-Fashion</h2>
          <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
            8,464 Tweets
          </p>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-800" />

      <div className="flex">
        <div className="flex-1">
          <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
            3 . Rock . Trending
          </p>
          <h2 className="px-4 ml-2 w-48 font-bold text-white">#Ferrari</h2>
          <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
            5,586 Tweets
          </p>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-800" />

      <div className="flex">
        <div className="flex-1">
          <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
            4 . Auto Racing . Trending
          </p>
          <h2 className="px-4 ml-2 w-48 font-bold text-white">#vettel</h2>
          <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
            9,416 Tweets
          </p>
        </div>
        <div className="flex-1 px-4 py-2 m-2">
          <a
            href=""
            className=" text-2xl rounded-full text-gray-400 hover:bg-gray-800 hover:text-blue-300 float-right"
          >
            <svg
              className="m-2 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="border-gray-800" />

      <div className="flex">
        <div className="flex-1 p-4">
          <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">Show more</h2>
        </div>
      </div>
    </div>
  );
};

async function Page() {
  const videoData = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/videos`,
    { next: { revalidate: 15 } }
  ).then((res) => res.json());
  console.log('video data', videoData);

  return (
    <>
      <div className="text-black overflow-y-scroll h-full w-full flex">
        {/*  create a card with video and description */}
        <div className="w-[75%]">
          <div className="w-full grid grid-cols-2">
            {videoData.map(
              (video: {
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
              }) => (
                <Card key={video.id} {...video} />
              )
            )}
          </div>
        </div>
        <div className="h-full w-[25%]">
          <Trending />
        </div>
      </div>
    </>
  );
}

export default Page;
