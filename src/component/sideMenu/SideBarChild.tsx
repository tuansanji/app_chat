import React from "react";

//home-1
//media-2
//markit-3
//ground-4
//game-5
//menu-6
//messenger-7
//ring-8
//img-9
//time-10
//fiend-11
//seemore-12
interface ISideBarChild {
  title: string;
  img: string;
  size?: boolean;
  font?: string;
  isOnline?: boolean;
}
const SideBarChild: React.FC<ISideBarChild> = ({
  title,
  img,
  size,
  font,
  isOnline,
}) => {
  return (
    <>
      <div className="flex gap-[10px] justify-between items-center">
        <div
          className={`relative ${
            isOnline &&
            "before:h-[10px] before:bg-[#25B74D] before:absolute before:w-[10px] before:rounded-[50%] before:bottom-0 before:right-0 before:z-50"
          }`}
        >
          <img
            src={img}
            alt=""
            className={`object-cover ${
              size
                ? " w-[40px] h-[40px]"
                : " w-[25px] h-[25px] before:w-[10px] "
            }`}
          />
        </div>
        <span
          className={`flex-1 text-[16px] font-medium leading-5 text-opacity-90 text-white ${font} `}
        >
          {title}
        </span>
      </div>
    </>
  );
};
export default SideBarChild;
