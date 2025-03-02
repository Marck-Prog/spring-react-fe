// import { useIntl } from "react-intl"; // Replacing `next-intl`
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TextButton from "../../Buttons/TextButton";

const sliders = [
  {
    id: 2,
    image: "/bg-img/curly_hair_girl-1.webp",
    imageTablet: "/bg-img/curly_hair_girl-1-tablet.png",
    imageMobile: "/bg-img/curly_hair_girl-1_mobile.jpg",
    subtitle: "50% off",
    titleUp: "New Cocktail",
    titleDown: "Dresses",
    rightText: false,
  },
  {
    id: 1,
    image: "/bg-img/curly_hair_white-1.jpg",
    imageTablet: "/bg-img/curly_hair_white-1-tablet.png",
    imageMobile: "/bg-img/curly_hair_white-1_mobile.jpg",
    subtitle: "Spring Revolution",
    titleUp: "Night Summer",
    titleDown: "Dresses",
    rightText: true,
  },
  {
    id: 3,
    image: "/bg-img/monigote.jpg",
    imageTablet: "/bg-img/monigote-tablet.png",
    imageMobile: "/bg-img/monigote_mobile.jpg",
    subtitle: "Spring promo",
    titleUp: "The Weekend",
    titleDown: "Promotions",
    rightText: false,
  },
];

const CategoryGrid = () => {
  // const t = useIntl();

  return (
    <div className="relative -top-20 w-full z-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <picture>
              <source media="(min-width: 1024px)" srcSet={slider.image} />
              <source media="(min-width: 640px)" srcSet={slider.imageTablet} />
              <img
                src={slider.imageMobile}
                alt="some name"
                className="w-full h-auto"
              />
            </picture>

            <div
              className={`${
                slider.rightText
                  ? "absolute bg-white p-4 opacity-90 sm:bg-transparent sm:p-0 sm:opacity-100 bottom-10 right-1/2 transform translate-x-1 sm:transform-none sm:top-1/3 sm:w-full sm:right-12 md:right-20 lg:right-40 flex flex-col items-center sm:items-end"
                  : "absolute bg-white p-4 opacity-90 sm:bg-transparent sm:p-0 sm:opacity-100 bottom-10 right-1/2 transform translate-x-1/2 sm:transform-none sm:top-1/3 sm:left-12 md:left-20 lg:left-40 flex flex-col items-center sm:items-start"
              }`}
            >
              <span className="bg-gray500 text-gray100 inline-block text-base sm:text-xs p-1 rounded-md">
                {slider.subtitle}
              </span>
              {/* <span
                className={`bg-gray500 text-gray100 inline-block text-base sm:text-xs p-1 rounded-md text-center ${
                  slider.rightText ? "sm:text-right" : "sm:text-left"
                }`}
              ></span> */}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4">
                {slider.titleUp} <br />
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4">
                {slider.titleDown}
              </span>
              <TextButton value="Shop Now" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryGrid;
