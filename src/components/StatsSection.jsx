import client from "../assets/client.png";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";

export const StatsSection = ({ elementsRef }) => {
  return (
    <section className="bg-[#f2f2f2ff] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-16">
      <div
        ref={(el) => (elementsRef.current[6] = el)}
        className="w-full md:w-1/2 flex justify-center relative"
      >
        <div className="absolute bg-[#666666ff] mt-20 w-52 h-52 md:w-72 md:h-80 z-40" />
        <div className="absolute bg-[#0d1029ff] mt-32 mr-42 w-52 h-52 md:w-58 md:h-78" />
        <img
          src={client}
          alt="Student"
          className="w-[300px] md:w-[253px] z-50"
        />
      </div>
      <div className="w-full  text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          <div className="text-5xl black">WE</div>{" "}
          <div className="text-orange-500 text-5xl mt-1">
            <span className="border-b-2 border-black border-">ARE SP</span>
            READING
          </div>
        </h2>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div
            ref={(el) => (elementsRef.current[7] = el)}
            className="flex items-center gap-4"
          >
            <img src={client1} alt="" />
            <div>
              <p className="text-5xl font-semibold text-black">108+</p>
              <p className="text-orange-500 text-2xl">Happy School</p>
            </div>
          </div>
          <div
            ref={(el) => (elementsRef.current[8] = el)}
            className="flex items-center gap-4"
          >
            <img src={client2} alt="" />
            <div>
              <p className="text-5xl font-semibold text-black">58030+</p>
              <p className="text-orange-500 text-2xl">Students</p>
            </div>
          </div>
          <div
            ref={(el) => (elementsRef.current[9] = el)}
            className="flex items-center gap-4"
          >
            <img src={client3} alt="" />
            <div>
              <p className="text-5xl font-semibold text-black">5360+</p>
              <p className="text-orange-500 text-2xl">Happy Parents</p>
            </div>
          </div>
          <div
            ref={(el) => (elementsRef.current[10] = el)}
            className="flex items-center gap-4"
          >
            <img src={client4} alt="" />
            <div>
              <p className="text-5xl font-semibold text-black">10+</p>
              <p className="text-orange-500 text-2xl">Happy Tutors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
