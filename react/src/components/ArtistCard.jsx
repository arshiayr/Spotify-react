import React from "react";

const TrackCard = ({
  track = {},
  onPlay = () => {},
  onLike = () => {},
  className = "",
}) => {
  const {
    title = "Loser",
    artist = "Tame Impala",
    imageUrl = "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit = true,
    isLiked = false,
  } = track;

  return (
    <div
      className={`group relative bg-transparent   rounded-md p-4 transition-all duration-300 cursor-pointer hover:shadow-2xl ${className}`}
      style={{ width: "200px" }}
    >
      <div className="relative mb-4">
        <img
          src={imageUrl}
          alt={`${title} by ${artist}`}
          className="w-full aspect-square rounded-full object-cover shadow-lg"
          loading="lazy"
        />

        <div className="absolute  inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlay(track);
            }}
            className="w-12 h-12 absolute right-1.5 bottom-2 rounded-full bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-2xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label={`Play ${title}`}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-black ml-1">
              <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
            </svg>
          </button>
        </div>

        {onLike && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onLike(track);
            }}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></button>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-[#a7a7a7] text-sm">
          <a
            href={`/artist/5INjqkS1o8h1imAzPqGZBb`}
            className="hover:text-white hover:underline truncate text-sm"
          >
            {artist}
          </a>
        </div>
      </div>
    </div>
  );
};

export const TrackGrid = () => {
  const [tracks, setTracks] = React.useState([
    {
      id: 1,
      title: "Loser",
      artist: "Tame Impala",
      albumId: "5WulAOx9ilWy1h8UGZ1gkI",
      trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
      isExplicit: true,
      duration: "3:45",
    },
  ]);

  const handlePlay = (track) => {
    console.log(`🎵 Playing: ${track.title}`);
  };

  const handleLike = (track) => {
    setTracks((prev) =>
      prev.map((t) => (t.id === track.id ? { ...t, isLiked: !t.isLiked } : t)),
    );
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <h2 className="text-white text-2xl font-bold mb-6">Popular Tracks</h2>
      <div className="flex flex-wrap gap-6">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onPlay={handlePlay}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackCard;
