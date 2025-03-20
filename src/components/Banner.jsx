"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import wave from "../assets/wave.png";
import clip from "../assets/Clip2.png";
import layer from "../assets/Layer-20.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Banner({ elementsRef }) {
  return (
    <div className="relative bg-white">
      <div className="relative px-8 py-16">
        {/* <img className="absolute left-0 bottom-0 w-full" src={wave} alt="" /> */}
        <div className="flex">
          <div
            ref={(el) => (elementsRef.current[0] = el)}
            className="flex-[2] bg-opacity-70 p-6 rounded-md text-white"
          >
            <img
              className="absolute bg-[#0d1029ff] w-[80%]"
              src={clip}
              alt=""
            />
            <ul className="text-3xl absolute z-50 p-20">
              <li>- 256 Courses</li>
              <li>- Expert Teachers</li>
              <li>- Online Education</li>
            </ul>
          </div>

          <div ref={(el) => (elementsRef.current[1] = el)} className="flex-[3]">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Online Study With SchoolAura
            </h2>
            <p className="mt-4">
              The world is changing for the better. Because of the advancement
              of technology, geek minds have grown tired of doing more work, and
              carrying books, notebooks and how much to buy books?
            </p>
            <p className="mt-4 font-semibold">
              Solution:{" "}
              <span className="font-normal">
                Now you can find a simple solution with SchoolAura. These days,
                almost everyone has a Smartphone, Tab, or Laptop. Just open your
                device and start studying from anywhere while traveling or
                sitting in the park.
              </span>
            </p>
            <p className="mt-4">
              Use your time wisely and gain knowledge every second. Use your
              device for the right things instead of wasting your time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          ref={(el) => (elementsRef.current[2] = el)}
          src={layer}
          alt=""
          className="absolute top-[80%]"
        />
      </div>
    </div>
  );
}
