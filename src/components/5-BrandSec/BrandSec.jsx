// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
const BrandSec = () => {
  const brandImg = [
    { id: 1, img: "https://mrkzgulfup.com/uploads/171555496626191.png" },
    { id: 2, img: "https://mrkzgulfup.com/uploads/171555496626982.png" },
    { id: 3, img: "https://mrkzgulfup.com/uploads/171555496627463.png" },
    { id: 4, img: "https://mrkzgulfup.com/uploads/171555496628344.png" },
    { id: 5, img: "https://mrkzgulfup.com/uploads/171555604852291.png" },
    { id: 6, img: "https://mrkzgulfup.com/uploads/171555604853442.png" },
  ];
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiperBarnd"
      >
        {brandImg.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                className="imgBrand"
                style={{ width: "60px" }}
                src={item.img}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BrandSec;
