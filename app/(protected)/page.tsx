import Image from 'next/image';
import Link from 'next/link';

const Video = () => {
  return (
    <>
      <div>
        <video
          style={{
            width: '100%',
            height: '100%',
          }}
          controls
          src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
        ></video>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <>
      <div className="flex flex-col items-center text-white h-[500px] rounded-lg p-4 pb-2 border-black border-[1.5px] bg-[#131313]">
        <Video />

        <div className="w-full flex flex-col items-start mt-4">
          <div className="w-full flex justify-between">
            <div className="flex space-x-2">
              <div className="bg-[#444444] py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase">
                Upvote
              </div>
              <div className="bg-[#444444] py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase">
                Downvote
              </div>
            </div>
            <div>
              <div className="bg-red-600 py-[8.5px] px-[10px] rounded-sm text-white text-xs font-bold uppercase">
                @channel - Subscribe
              </div>
            </div>
          </div>
          <dl>
            <div className="mt-1">Title of the video</div>
          </dl>
          <dl>
            <div className="text-xs mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptas voluptate perspiciatis ab quisquam possimus natus, modi
              magnam?
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

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

function Page() {
  return (
    <>
      <div className="text-black overflow-y-scroll h-full w-full flex">
        {/*  create a card with video and description */}
        <div className="w-[55%]">
          <div className="w-full space-y-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="h-full w-[45%] px-4">
          <Notifications />
        </div>
      </div>
    </>
  );
}

export default Page;
