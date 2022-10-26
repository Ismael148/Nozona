import Image from 'next/image';
import React from 'react';
import { HiThumbUp, HiChatAlt2, HiOutlineShare } from 'react-icons/hi';

function Post({ name, message, email, postImage, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt="user-post"
          />
          <div>
            <p className="font-medium">{name}</p>

            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.seconds * 1000).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading ...</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:96 bg-white">
          <Image
            src={postImage}
            objectFit="cover"
            alt="user-pst"
            layout="fill"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HiThumbUp className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HiChatAlt2 className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HiOutlineShare className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
