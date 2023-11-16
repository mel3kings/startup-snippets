# Get Recent Video from Youtube

Simple call to youtube based on channel id to get latest video

## Code

```js
import React from "react";
import { useEffect, useState } from "react";
import { relativeDateString } from "./Utils";

export const RecentVideos = ({ videoURL }) => {
  const [video, setVideo] = useState({});
  useEffect(() => {
    const getYoutubeVideos = async () => {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${videoURL}`
      );
      const data = await response.json();
      if (data.status === "ok") {
        const latestVideo = data.items[0];
        setVideo(latestVideo);
      }
    };
    getYoutubeVideos();
  }, []);

  return (
    <div className="rounded-lg overflow-x-auto h-full">
      <div className="video-responsive">
        <iframe
          width="420"
          height="315"
          src={generateEmbedURL(video?.link)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <span className="text-sm text-left">{relativeDateString(video.pubDate)}</span>
    </div>
  );
};

export const generateEmbedURL = (url) => {
  if (!url) {
    return "";
  }
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

export const formatDate = (dateString) => {
  if (!dateString) {
    return "";
  }
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
```
