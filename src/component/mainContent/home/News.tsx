import news1 from "../../../assets/image/news1.png";
import news2 from "../../../assets/image/news2.png";
import news3 from "../../../assets/image/news3.svg";
import news4 from "../../../assets/image/news4.png";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
interface InnerSlider {
  state: {
    currentSlide: number;
  };
}
const News = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const [arrow, setArrow] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [updateCount, setUpdateCount] = useState<number>(0);
  const slider = React.useRef<Slider & { innerSlider: InnerSlider }>(null);
  useEffect(() => {
    if (slideIndex === 0) {
      setArrow(false);
    } else {
      setArrow(true);
    }
  }, [button, slideIndex]);

  let settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,

    beforeChange: (current, next) => setSlideIndex(next),
    afterChange: (currentSlide) => {
      setUpdateCount(updateCount + 1);
      // Lấy ra đối tượng slick slider và tính toán lastVisibleIndex
    },
  };

  return (
    <div className="w-full bg-[#1D1D24] rounded-xl flex  flex-col   min-h-[300px]">
      <div className="h-[60px] border-b border-b-white border-opacity-10 w-full flex px-[20px] ">
        <div className="w-[150px] gap-[10px] flex items-center justify-center flex-1 border-b-4 border-[#2374E1] h-full">
          <img src={news1} alt="" className="object-cover w-[27px] h-[25px]" />
          <span className="text-[#2374E1] text-[16px] font-medium leading-[19px]">
            Stories
          </span>
        </div>
        <div className="w-[150px] gap-[10px] flex items-center justify-center flex-1">
          <img src={news2} alt="" className="object-cover w-[27px] h-[25px]" />
          <span className="text-[white] text-[16px] font-medium leading-[19px]">
            Reels
          </span>
        </div>
      </div>
      <div className="w-full flex-1  p-[20px] relative">
        {scrolled && arrow && (
          <button
            className="absolute w-[4rem] h-[4rem] flex items-center justify-center  bg-[white] rounded-[50%] z-50 left-[7rem] top-1/2 active:opacity-80 -translate-y-1/2"
            onClick={() => {
              slider?.current?.slickPrev();
              setButton(!button);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#777]  font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        <button
          className="absolute w-[4rem] h-[4rem] flex items-center justify-center bg-[white] rounded-[50%] right-[10rem] top-1/2 active:opacity-80 -translate-y-1/2 z-50"
          onClick={() => {
            slider?.current?.slickNext();
            setScrolled(true);
            setButton(!button);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-[#777] font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <Slider ref={slider} {...settings}>
          {Array(10)
            .fill(null)
            .map((item, index) => (
              <div
                key={index}
                className="h-[200px] w-[112px] rounded-xl overflow-hidden relative"
              >
                <img
                  src="https://img.thuthuatphanmem.vn/uploads/2018/10/16/anh-dep-luffy-be_101532746.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
                {index === 0 ? (
                  <img
                    src={news3}
                    alt=""
                    className="absolute z-50 w-[40px] h-[40px] bottom-[30px] left-1/2 -translate-x-1/2"
                  />
                ) : (
                  <img
                    src={news4}
                    alt=""
                    className="absolute z-50 w-[30px] h-[30px] top-[10px] left-[10px]"
                  />
                )}
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
