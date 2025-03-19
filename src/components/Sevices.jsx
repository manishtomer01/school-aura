import { useState } from "react";

export default function Sevices({ elementsRef }) {
  const categories = [
    {
      title: "School",
      types: [
        { name: "11th Class", count: "182+" },
        { name: "12th Class", count: "178+" },
        { name: "6th Class", count: "151+" },
        { name: "7th Class", count: "150+" },
        { name: "10th Class", count: "150+" },
        { name: "9th Class", count: "141+" },
        { name: "8th Class", count: "135+" },
        { name: "5th Class", count: "57+" },
      ],
    },
    {
      title: "Competitive",
      types: [
        { name: "SSC CHSL", count: "29+" },
        { name: "SSC CGL", count: "15+" },
        { name: "UPSC IAS", count: "8+" },
        { name: "SBI Clerk", count: "5+" },
        { name: "SSC CPO", count: "5+" },
        { name: "SSC MTS", count: "5+" },
        { name: "SBI PO", count: "3+" },
        { name: "RBI Grade B", count: "3+" },
        { name: "UPSC CAPF", count: "3+" },
        { name: "IBPS Clerk", count: "3+" },
        { name: "SSC JE", count: "2+" },
      ],
    },
    {
      title: "Enterance",
      types: [
        { name: "VITEEE", count: "6+" },
        { name: "CUCET", count: "6+" },
        { name: "CAT", count: "5+" },
        { name: "XAT", count: "4+" },
        { name: "MAT", count: "+1" },
      ],
    },
    {
      title: "Tutors",
      types: "Coming Soon",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Competitive");

  return (
    <div className="mt-[30%]">
      <div className="mx-12 text-4xl font-bold">
        <div className="">PROVIDE</div>
        <div className="text-[#ff5203ff]">BEST EDUCATIONAL</div>
      </div>
      <div
        ref={(el) => (elementsRef.current[3] = el)}
        className="flex w-full max-w-6xl mx-auto mt-10"
      >
        <div className="w-1/4 flex flex-col border-r border-gray-300">
          {categories.map((category) => (
            <button
              key={category.title}
              className={`p-4 text-left text-lg font-medium border-l-4 transition-all duration-200 ${
                activeCategory === category.title
                  ? "border-orange-500 text-orange-500 bg-gray-100"
                  : "border-transparent text-gray-600 bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>
        <div className="w-3/4 p-4">
          {categories.map(
            (category) =>
              activeCategory === category.title && (
                <div key={category.title}>
                  {Array.isArray(category.types) ? (
                    <div className="grid grid-cols-4 gap-4">
                      {category.types.map((type, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-white shadow-md p-2"
                        >
                          <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center text-lg font-bold">
                            N
                          </div>
                          <div>
                            <p className="text-orange-500 font-semibold">
                              {type.name}
                            </p>
                            <p className="text-gray-500 text-sm">
                              {type.count}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 text-lg">
                      {category.types}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
