"use client";

import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Eye, MessageCircle, ThumbsUp } from "lucide-react";

const YoutubeVideoDetails = ({ videoId }: { videoId: string }) => {
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchVideoDetails = async () => {
      const details = await getVideoDetails(videoId);
      setVideoDetails(details);
      setIsLoading(false);
    };
    fetchVideoDetails();
  }, [videoId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
      </div>
    );
  }

  if (!videoDetails) {
    return <div>Video not found</div>;
  }

  console.log(videoDetails);

  return (
    <div className="@container bg-white rounded-xl">
      <div className="flex flex-col gap-8">
        {/* Video Thumbnail */}
        <div className="flex-shrink-0">
          <Image
            src={videoDetails.thumbnail}
            alt={videoDetails.title}
            width={500}
            height={500}
            className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Video Details */}
        <div className="flex-grow space-y-4">
          <h1 className="text-2xl @lg:text-3xl font-bold text-gray-900 leading-tight line-clamp-2">
            {videoDetails.title}
          </h1>

          {/* Channel Info */}
          <div className="flex items-center gap-4">
            <Image
              src={videoDetails.channel.thumbnail}
              alt={videoDetails.channel.title}
              width={48}
              height={48}
              className="w-10 h-10 @md:w-12 @md:h-12 rounded-full border-2 border-gray-100"
            />

            <div>
              <p className="text-base @md:text-lg font-semibold text-gray-900">
                {videoDetails.channel.title}
              </p>
              <p className="text-sm @md:text-base text-gray-600">
                {videoDetails.channel.subscribers} subscribers
              </p>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600">Published</p>
              </div>

              <p className="font-medium text-gray-900">
                {new Date(videoDetails.publishedAt).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600">Views</p>
              </div>
              <p className="font-medium text-gray-900">{videoDetails.views}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <ThumbsUp className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600">Likes</p>
              </div>
              <p className="font-medium text-gray-900">{videoDetails.likes}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle className="w-4 h-4 text-gray-600" />
                <p className="text-sm text-gray-600">Comments</p>
              </div>
              <p className="font-medium text-gray-900">
                {videoDetails.comments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoDetails;
