"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Varun Kasyap",
    location: "Uttar Pradesh",
    image: "../src/assets/user2.jpg",
    text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
  },
  {
    name: "Vishal Kumar",
    location: "Delhi",
    image: "../src/assets/user-5.jpg",
    text: "My daughter used to despise math, but now she can confidently take math tests. She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support.",
  },
  {
    name: "Ravi Kaushal",
    location: "Indore, Madhya Pradesh",
    image: "../src/assets/user-3.png",
    text: "Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer.",
  },
  {
    name: "Rasmi Panday",
    location: "Delhi",
    image: "../src/assets/user-4.jpg",
    text: "I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions. Thank you, School Aura, for making math so much fun for my child!",
  },
  {
    name: "Rakesh Sharma",
    location: "Faridabad,Haryana",
    image: "../src/assets/user-6.jpg",
    text: "A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning.",
  },
];

const Testimonials = ({ elementsRef }) => {
  return (
    <div className="bg-gray-100 py-10 mt-28">
      <div ref={(el) => (elementsRef.current[12] = el)}>
        <h2 className="text-center text-5xl font-bold text-gray-900">
          WHAT <span className="text-orange-500">PARENT SAYS</span>
        </h2>

        <div className="max-w-5xl mx-auto mt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            // loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-orange-500 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Bullets */}
          <div className="custom-pagination flex justify-center gap-4 mt-6"></div>
        </div>

        {/* Custom Bullet Styles */}
        <style>
          {`
          .custom-bullet {
            width: 40px;
            height: 4px;
            background-color: #000000;
            display: inline-block;
            margin:0 5px;
            border-radius:0px;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .custom-bullet.swiper-pagination-bullet-active {
            background-color: #f97316;
            transform: scale(1.2);
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Testimonials;
