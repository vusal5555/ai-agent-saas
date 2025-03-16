"use client";

import Usage from "@/components/Usage";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import { FeatureFlag } from "@/features/flags";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TitleGeneration from "@/components/TitleGeneration";
import Transcription from "@/components/TranscriptGeneration";
import AIagentChat from "@/components/AIagentChat";
import { Doc } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { createOrGetVideo } from "@/actions/createOrGetVideo";
const VideoAnalysisPage = () => {
  const params = useParams<{ videoId: string }>();

  const { user } = useUser();

  const [video, setVideo] = useState<Doc<"videos"> | null | undefined>(
    undefined
  );

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     const response = await createOrGetVideo(params.videoId);

  //     if (!response.success) {
  //       console.log(response.error);
  //     } else {
  //       setVideo(response.video);
  //     }
  //   };

  //   fetchVideo();
  // }, [user, params.videoId]);

  const { videoId } = params;
  return (
    <div className="xl:container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* left side */}
        <div className="order-2 lg:order-1 flex flex-col gap-4 bg-white lg:border-r border-gray-200 p-6">
          {/* ananlysis section */}

          <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl">
            <Usage
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyze Video"
            ></Usage>
          </div>
          {/* youtube video details */}

          <YoutubeVideoDetails videoId={videoId}></YoutubeVideoDetails>
          {/* image generation */}
          <ThumbnailGeneration videoId={videoId} />
          {/* title generation */}
          <TitleGeneration videoId={videoId} />
          {/* transcript */}
          <Transcription videoId={videoId} />
        </div>

        {/* right side */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
          {/* ai agent chat */}

          <AIagentChat videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysisPage;
