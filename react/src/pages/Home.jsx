
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

        
      </section>
    </>
  );
};

export default Home;
