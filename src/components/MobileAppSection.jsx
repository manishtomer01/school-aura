import React from "react";
import schoolaura from "/src/assets/school_aura_app.png";
import spreading from "/src/assets/spreading.png";
import clip from "/src/assets/Clip (1).png";
const MobileAppSection = ({ elementsRef }) => {
  return (
    <div className="">
      <section className="bg-gray-100 pb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="">
          <img
            src={schoolaura}
            alt="SchoolAura Mobile App"
            className="w-[300px] md:w-[450px] shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Easy to Access with{" "}
            <span className="text-orange-500">Mobile APP</span>
          </h2>
          <p className="mt-4 text-gray-700">
            If you're looking for easily accessible resources for your
            classroom, then you're in the right place. Online learning with the
            Android app is very easy to access. That's why we've hand-curated
            the School Aura free app and website. Easy to use and learn!
          </p>
          <p className="mt-2 text-gray-700">
            To learn online, you need to be reasonably comfortable with Smart
            Mobile Phone, Tab, Laptops, and the internet. The advantage of
            learning online via an android app is that you can pause the
            video/audio whenever you need to take notes or simply absorb what
            has been said. Another fantastic feature of online learning is that
            you can re-listen to different parts as needed, which is something
            you can't do in a live lecture!
          </p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Download Now
          </button>
        </div>
      </section>
      <section
        ref={(el) => (elementsRef.current[4] = el)}
        className="pt-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefits of{" "}
            <span className="text-orange-500">Online Education</span>
          </h2>
          <hr className="my-4 border-t-2 border-gray-300 w-24" />
          <p className="text-gray-700">
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={spreading}
            alt="Benefits of Online Education"
            className="w-[250px]"
          />
        </div>
      </section>
      <div
        ref={(el) => (elementsRef.current[5] = el)}
        className="flex justify-center relative mx-14"
      >
        <img src={clip} className="z-50" alt="" />
        <div
          className="absolute top-0 left-0 w-full h-full grid grid-cols-4 items-center justify-center text-start pl-20"
          style={{ backgroundColor: "#141830ff", pointerEvents: "none" }}
        >
          <div className="">
            <div className="text-white text-5xl font-semibold">10000+</div>
            <div className="text-[#ff510dff] text-2xl font-semibold">
              Total Exams
            </div>
          </div>
          <div className="">
            <div className="text-white text-5xl font-semibold">600+</div>
            <div className="text-[#ff510dff] text-2xl font-semibold">
              Courses
            </div>
          </div>
          <div className="">
            <div className="text-white text-5xl font-semibold">3000+</div>
            <div className="text-[#ff510dff] text-2xl font-semibold">
              Sucess Stories
            </div>
          </div>
          <div className="">
            <div className="text-white text-5xl font-semibold">4.5/5</div>
            <div className="text-[#ff510dff] text-2xl font-semibold">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
