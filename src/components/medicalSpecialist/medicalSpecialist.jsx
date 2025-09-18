
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const doctors = [
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: "/src/assets/ahmad.jpg",
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopaedics",
    image: "/src/assets/ahmad-stevens.jpg",
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: "/src/assets/ankur.jpg",
  },
  {
    name: "Dr. Emily Hull",
    specialty: "General Medicine",
    image: "/src/assets/ahmad-stevens.jpg",
  },
];

const MedicalSpecialist = () => {
  return (
    <section className="py-10 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold" style={{textAlign:'center',marginBottom:'20px'}}>Our Medical Specialist</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {doctors.map((doc, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-5 text-center">
              <div className="flex justify-center">
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{ width: '70%', height: '70%' }}
                  className="w-40 h-40 object-cover rounded-full border-4 border-blue-100"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4">{doc.name}</h3>
              <p className="text-blue-500 font-medium">{doc.specialty}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MedicalSpecialist;
