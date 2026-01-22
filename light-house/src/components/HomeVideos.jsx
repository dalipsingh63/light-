import { useEffect, useState } from "react";
import { getVideos } from "../services/videoService";

const UserVideo = () => {
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadLatestVideo = async () => {
    try {
      const res = await getVideos();
      if (res.videos && res.videos.length > 0) {
        setLatestVideo(res.videos[0]); // latest only
      } else {
        setLatestVideo(null);
      }
    } catch (err) {
      console.error("Error loading user video", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLatestVideo();
  }, []);

  if (loading) {
    return <p className="text-center py-1">Loading video...</p>;
  }

  if (!latestVideo) {
    return <p className="text-center py-1">No video available</p>;
  }

  return (
    // 🔥 ABSOLUTE ZERO GAP
    <section className="bg-white p-0 m-0">
      <div className="flex justify-center p-0 m-0">
        <div
          className="
            w-full max-w-md
            bg-white rounded-xl
            shadow-md border
            overflow-hidden
          "
        >
          {/* SAME SIZE VIDEO BOX */}
          <div className="relative w-full aspect-video bg-black m-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={latestVideo.videoUrl} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>

          {/* VERY COMPACT TEXT (no gap feel) */}
          {(latestVideo.title || latestVideo.description) && (
            <div className="px-3 py-2 text-center">
              {latestVideo.title && (
                <h3 className="font-semibold text-sm text-[#0a1f44] leading-tight">
                  {latestVideo.title}
                </h3>
              )}
              {latestVideo.description && (
                <p className="text-xs text-gray-600 leading-snug mt-0.5">
                  {latestVideo.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserVideo;
