import TrackCard from "../components/TrackCard";
import ArtistCard from "../components/ArtistCard";

const tracks = [
  {
    title: "Loser",
    artist: "Tame Impala",
    albumId: "5WulAOx9ilWy1h8UGZ1gkI",
    trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit: true,
  },
  {
    title: "Loser",
    artist: "Tame Impala",
    albumId: "5WulAOx9ilWy1h8UGZ1gkI",
    trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit: true,
  },
  {
    title: "Loser",
    artist: "Tame Impala",
    albumId: "5WulAOx9ilWy1h8UGZ1gkI",
    trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit: true,
  },
  {
    title: "Loser",
    artist: "Tame Impala",
    albumId: "5WulAOx9ilWy1h8UGZ1gkI",
    trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit: true,
  },
  {
    title: "Loser",
    artist: "Tame Impala",
    albumId: "5WulAOx9ilWy1h8UGZ1gkI",
    trackId: "7bxaFZ1O3cHkgLKMsdC3xR",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
    isExplicit: true,
  },
];

const artists = [
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
  {
    name: "Tame Impala",
    imageUrl:
      "https://i.scdn.co/image/ab67616d00001e02208500450dcd0fd294d7bd3b",
  },
];

const Home = () => {
  return (
    <>
      <section aria-label="Trending songs">
        <div className="w-full flex justify-between items-center mb-4">
          <a href="" className="font-bold text-2xl hover:underline ">
            Trending songs
          </a>
          <a
            href=""
            className="font-bold text-[14px] text-gray-600 hover:underline  "
          >
            Show all
          </a>
        </div>

        <div className=" flex p-8">
          {tracks.map((track, index) => (
            <TrackCard
              key={index}
              track={track}
              onPlay={() => console.log("Playing")}
            />
          ))}
        </div>
      </section>

      <section aria-label="Popular artists">
        <div className="w-full flex justify-between items-center mb-4">
          <a href="" className="font-bold text-2xl hover:underline ">
            Popular artists
          </a>
          <a
            href=""
            className="font-bold text-[14px] text-gray-600 hover:underline  "
          >
            Show all
          </a>
        </div>

        <div className=" flex p-8">
          {artists.map((track, index) => (
            <ArtistCard
              key={index}
              track={track}
              onPlay={() => console.log("Playing")}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
