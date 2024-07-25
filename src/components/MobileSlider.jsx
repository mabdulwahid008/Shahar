import bg from "../assets/images/slider-bg.svg";
import { SliderData } from "../data/SliderData";
import Continer from "../layouts/Continer";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlider from "./SingleSlider/SingleSlider";

const MobileSlider = () => {
  return (
    <section className="md:py-24 py-12  bg-lightprimary block md:hidden overflow-x-hidden ">
      <Continer>
        <div className=" relative z-50">
          <div className="text-center relative z-50">
            <h3 className="font-semibold md:text-2xl text-xl">
              עו&quot;ד שרי דביר
            </h3>
            <h1 className="font-semibold md:text-5xl text-3xl mt-4">
              עו&quot;ד שרי דביר וצוות משרדה מתמחים במיצוי זכויות ופיצויים
              במגוון מקרים:
            </h1>
          </div>
          {/* render slider contents start */}
          <div className="md:py-8 text-center py-4 w-full mx-auto h-full relative z-50 mt-6 md:mt-0">
            <div className=" flex-wrap justify-center items-start -mx-5  flex">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {SliderData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={`w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2.5 mb-5 ${
                          index % 2 === 0
                            ? "lading_even_item"
                            : "lading_odd_item"
                        }`}
                        key={item.id}
                      >
                        <SingleSlider
                          title={item.title}
                          description={item.description}
                          imageUrl={item.imageUrl}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          {/* render slider contents end */}
          <div className="flex justify-center items-center pb-8 ">
            <h4 className="max-w-md text-center font-semibold md:text-2xl text-xl">
              עו&quot;ד שרי דביר ייצגה מאות לקוחות משנת 2015 באחוזי הצלחה
              גבוהים.
            </h4>
          </div>
          <img
            className="absolute w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            src={bg}
            alt="bg"
          />
        </div>
      </Continer>
    </section>
  );
};

export default MobileSlider;
