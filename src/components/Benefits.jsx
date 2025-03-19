import {
  FaEye,
  FaFile,
  FaInfo,
  FaLink,
  FaShare,
  FaTasks,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaTasks size={40} />,
    title: "Task Activities",
    description:
      "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can be submitted online which helps students to finish their tasks online.",
  },
  {
    icon: <FaFile size={40} />,
    title: "Exam Results",
    description:
      "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
  },
  {
    icon: <FaInfo size={40} />,
    title: "Notice Updates",
    description:
      "The necessary announcements and updates will reach to the students and parents quickly.",
  },
  {
    icon: <FaEye size={40} />,
    title: "Monitoring",
    description:
      "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.",
  },
  {
    icon: <FaLink size={40} />,
    title: "Connectivity",
    description:
      "When all the information is available online, and is shared regularly with parents and students transparency will be maintained.",
  },
  {
    icon: <FaShare size={40} />,
    title: "Planning & Sharing",
    description:
      "It becomes important nowadays for students to share their thoughts and ideas, SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold text-black">
        BENEFITS OF SCHOOLAURA
      </h2>
      <h3 className="text-center text-4xl font-bold text-[#ff5203ff] mt-2">
        FOR STUDENT
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 border border-[#f2f2f2ff] rounded-2xl shadow-md text-center bg-white"
          >
            <div className="text-black mb-3 flex justify-center">
              {benefit.icon}
            </div>
            <h4 className="text-xl font-semibold text-black">
              {benefit.title}
            </h4>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
