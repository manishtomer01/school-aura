import { MdPlayArrow } from "react-icons/md";

export const CampusVisitSection = ({ elementsRef }) => {
  return (
    <section className="py-12 bg-[#f2f2f2ff] px-6 md:px-16 flex flex-col md:flex-row items-center gap-8 mt-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <iframe
          className="w-full h-64 md:h-80 shadow-lg rounded-lg"
          src="https://www.youtube.com/embed/your-video-id"
          title="Campus Video"
          allowFullScreen
        ></iframe>
      </div>
      <div
        ref={(el) => (elementsRef.current[11] = el)}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          VISIT OUR CAMPUS
          <div className="text-[#FF5500]">
            <span className="text-black">WITH</span> IMAGE GALLERY
          </div>
        </h2>
        <hr className="my-4 border-t-2 border-gray-300 w-24" />
        <p className="text-gray-700 text-xl">
          Even slightly believable. If you are going use a passage of Lorem
          Ipsum need
        </p>
        <h3 className="mt-4 text-5xl font-semibold text-gray-900">
          OR WATCH WITH VIDEO
        </h3>
        <button className="mt-4 flex items-center justify-center gap-2 font-semibold text-xl hover:shadow-black p-3 rounded-lg hover:shadow-2xl">
          <div className="">
            <MdPlayArrow className="text-3xl text-[#FF5500]" />
          </div>
          <div className="">PLAY NOW</div>
        </button>
      </div>
    </section>
  );
};
