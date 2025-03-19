import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const CustomDropdown = ({ menuItems, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className=" hover:text-yellow-300 flex justify-center items-center gap-2">
        {title} <TiArrowSortedDown className="text-lg mt-1" />
      </button>

      {isOpen && (
        <div className="absolute w-40 bg-orange-700 rounded-md shadow-lg z-10">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block px-4 py-2 text-white hover:bg-orange-800"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
