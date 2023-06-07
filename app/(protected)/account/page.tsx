'use client';
import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';
import toast from 'react-hot-toast';

export default function UploadComponent() {
  let [videoUrl, setVideoUrl] = useState('');
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const handleTitleChange = (e: any) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setVideoDescription(e.target.value);
  };

  let handleFileChange = async (event: any) => {
    console.log('Uploading file...');
    let file = event.target.files[0];
    let toastId = toast.loading('Uploading...');
    try {
      let {
        url,
      }: {
        url: string;
      } = await uploadToS3(file);
      setVideoUrl(url);
      toast.success('Upload complete!', { id: toastId });
    } catch (err) {
      toast.error('Upload failed Please Upload videos only.', {
        id: toastId,
      });
      console.log(err);
    }
  };

  const publishVideo = async () => {
    if (!videoTitle || !videoDescription || !videoUrl) {
      return toast.error('Please fill all the fields');
    }
    let toastId = toast.loading('Uploading...');
    try {
      let res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1,
          videoTitle,
          videoDescription,
          videoUrl,
        }),
      });
      let data = await res.json();
      toast.success('Upload complete!', { id: toastId });
      setVideoTitle('');
      setVideoDescription('');
      setVideoUrl('');
      setSelectedVideo(null);
    } catch (err) {
      toast.error('Upload failed Please try again.', {
        id: toastId,
      });
      console.log(err);
    }
  };

  return (
    <>
      {/* {videoUrl && <img src={videoUrl} />} */}
      <div>
        <div className="p-4 bg-[#444444] border-black border-[1px] text-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Upload Video</h2>
          <div>
            <div className="mb-4">
              <label htmlFor="videoTitle" className="block font-medium mb-1">
                Video Title
              </label>
              <input
                type="text"
                id="videoTitle"
                className="w-full border-black bg-[#585858] outline-none border-[1.2px] rounded px-3 py-2"
                value={videoTitle}
                onChange={handleTitleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="videoDescription"
                className="block font-medium mb-1"
              >
                Video Description
              </label>
              <textarea
                id="videoDescription"
                className="w-full border-black bg-[#585858] outline-none border-[1.2px] rounded px-3 py-2"
                value={videoDescription}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="videoUpload" className="block font-medium mb-1">
                Video Upload
              </label>
              <input
                type="file"
                id="videoUpload"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex items-center w-full items- justify-between">
                <div>
                  <label
                    htmlFor="videoUpload"
                    className="px-4 py-2 border border-black rounded cursor-pointer hover:bg-black"
                  >
                    Select Video
                  </label>
                  {videoUrl && (
                    <span className="ml-2 text-green-500">Video Uploaded</span>
                  )}
                </div>
                <button
                  onClick={publishVideo}
                  className="bg-[#8e65fb] border-black  text-white px-4 py-2 rounded"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
