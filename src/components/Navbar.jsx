import cloud from "/src/assets/logo-cloud.png";
import logo from "/src/assets/logo_school.png";
import CustomDropdown from "./CustomDropdown";
export default function Navbar() {
  const ExamSolutionItems = [
    { label: "1st-12th Exam", link: "#" },
    { label: "Competitive Exam", link: "#" },
    { label: "Entrance Exam", link: "#" },
  ];
  const OnlineStudyItems = [
    { label: "1st-12th Class", link: "#" },
    { label: "Competitive Class", link: "#" },
    { label: "Entrance Class", link: "#" },
  ];
  const TutorSolutionItems = [
    { label: "Find Tutor", link: "#" },
    { label: "Become Tutor", link: "#" },
  ];
  return (
    <div className="bg-[#FF5500] flex justify-between min-w-full">
      <div className="relative">
        <img src={cloud} width={220} alt="" />
        <img className="absolute top-2 left-12" src={logo} width={120} alt="" />
      </div>
      <div className="flex gap-10 text-white py-2">
        <div className="hover:text-yellow-300">Home</div>
        <div className="">
          <CustomDropdown
            title={"Exam Solution"}
            menuItems={ExamSolutionItems}
          />
        </div>
        <div className="">
          {" "}
          <CustomDropdown title={"Online Study"} menuItems={OnlineStudyItems} />
        </div>
        <div className="">
          {" "}
          <CustomDropdown
            title={"Tutor Solution"}
            menuItems={TutorSolutionItems}
          />
        </div>
        <div className="hover:text-yellow-300">Blogs</div>
        <div className="hover:text-yellow-300">Contact Us</div>
        <div className="hover:text-yellow-300 p-1">
          <span className="bg-black px-4 py-2 rounded">School Management</span>
        </div>
      </div>
    </div>
  );
}
