import { Eye, EyeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import user from "/src/assets/user-img.png";
import { FaChevronUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headerGirlIcon from "../assets/header-girl-icon.png";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const solutions = [
    {
      title: "ENTERANCE Solution",
      links: [
        { text: "Exam", href: "#" },
        { text: "Courses", href: "#" },
      ],
    },
    {
      title: "COMPETITIVE Solution",
      links: [
        { text: "Exam", href: "#" },
        { text: "Courses", href: "#" },
      ],
    },
    {
      title: "KG - 12TH SCHOOL",
      links: [
        { text: "Exam", href: "#" },
        { text: "Courses", href: "#" },
      ],
    },
    {
      title: "TUTOR SOLUTION",
      links: [
        { text: "Find Tutors", href: "#" },
        { text: "Become Tutor", href: "#" },
      ],
    },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("student");
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0, opacity: 0, transformOrigin: "center bottom" },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);
  return (
    <div
      id="moveUp"
      className="min-h-auto pb-48 bg-[#FF5500] relative overflow-hidden min-w-full"
      style={{
        backgroundImage: `url('src/assets/banner-bg.png')`,
        backgroundPosition: "center",
      }}
    >
      {/* <div ref={containerRef} className="flex justify-center gap-4 m-6 pt-10"> */}
      <div
        ref={containerRef}
        // style={{ gridTemplateColumns: "3fr 1fr" }}
        // className="grid gap-4 m-6"
        className="flex sm:flex-row flex-col-reverse gap-4 m-6"
      >
        <div className="sm:flex-[3]">
          <div className="mt-12 ml-16">
            <h1 className="text-5xl md:text-6xl text-white mb-2">
              BE A <span className="text-black">SMART STUDENT</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              SchoolAura Is A Smart Education Platform
            </h2>
          </div>
          {/* <div className="flex justify-around gap-2"> */}
          <div
            style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
            className="sm:grid relative pl-18 pt-12"
          >
            <img
              className="absolute left-2 top-0"
              src={headerGirlIcon}
              alt="headerGirlIcon"
            />
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white max-w-xl rounded-lg py-4 px-7 shadow-lg shadow-black mx-2"
              >
                <h3 className="text-xl font-bold text-center mb-2">
                  {solution.title.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {solution.title.split(" ").pop()}
                </h3>
                <div className="flex flex-col gap-2">
                  {solution.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="bg-[#FF5500] text-white text-center py-1 px-6 rounded-full font-medium hover:bg-[#E04A00] transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className="text-center font-medium mt-2 flex items-center justify-center"
                  >
                    READ MORE <span className="ml-1">›</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative sm:flex-1 mt-6 max-w-lg">
          <div className="bg-white rounded-lg shadow-2xl shadow-black overflow-hidden">
            {/* Avatar */}
            <div className="flex absolute left-[37%] justify-center -mt-12 mb-4">
              <div className="w-24 h-24 rounded-full bg-[#C71585] flex items-center justify-center border-4 border-white overflow-hidden">
                <img
                  src={user}
                  alt="Student avatar"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Login tabs */}
            <div className="flex mt-12 border-b">
              <button
                className={`flex-1 py-3 font-medium ${
                  activeTab === "student"
                    ? "text-[#8BC34A] border-b-2 border-[#8BC34A]"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("student")}
              >
                Student Login
              </button>
              <button
                className={`flex-1 py-3 font-medium ${
                  activeTab === "parents"
                    ? "text-[#8BC34A] border-b-2 border-[#8BC34A]"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("parents")}
              >
                Parents Login
              </button>
            </div>

            {/* Login form */}
            <div className="p-4">
              <div className="mb-2">
                <label className="block text-gray-700 mb-1">
                  {activeTab === "student" && "Mobile Number or Key"}
                  {activeTab === "parents" && "Parent mobile number or Email"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md bg-gray-100"
                />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 mb-1">
                  {activeTab === "student" ? "Student" : "Parent"} Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border rounded-md bg-gray-100"
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-[#0F172A] text-white rounded-md font-medium hover:bg-[#1E293B] transition-colors">
                Login
              </button>

              {activeTab === "student" && (
                <div className="flex justify-between mt-4 text-sm">
                  <Link href="#" className="text-gray-600 hover:underline">
                    Forgot Password
                  </Link>
                  <Link href="#" className="text-gray-600 hover:underline">
                    Create Account
                  </Link>
                </div>
              )}

              {activeTab === "parents" && (
                <div className="flex justify-end mt-4 text-sm">
                  <Link href="#" className="text-gray-600 hover:underline">
                    Forgot Password
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="fixed z-50 right-24 rounded bottom-8 bg-orange-500 p-2">
        <a href="#moveUp">
          <FaChevronUp className="text-white  text-2xl font-bold" />
        </a>
      </button>
    </div>
  );
}
