import news4 from "../../../assets/image/news4.png";
import { ICommentUser, IListComment } from "../../../until/interface";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ReelsComment: React.FC<IListComment> = (props) => {
  const { list } = props;
  const [openListComment, setOpenListComment] = useState<boolean>(false);
  const commentRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full shadow-2xl bg-bg">
      <div
        ref={commentRef}
        className="main_list_comment w-full max-h-[50rem] flex flex-col gap-[25px]  overflow-y-auto transition-all"
      >
        {!openListComment && list.length > 0
          ? newFunction(list[0])
          : list?.map((comment, index) => newFunction(comment))}
        {list.length > 0 && !openListComment && (
          <div className="w-full p-[20px] pt-0">
            <p
              className="text-[1.6rem] inline-block text-[#959393] hover:underline font-semibold cursor-pointer "
              onClick={() => {
                console.log(commentRef.current?.children);
                // let parentNode = commentRef.current?.parentNode

                setOpenListComment(true);
              }}
            >
              See more comments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReelsComment;

// phần bình luận
function newFunction(comment: ICommentUser): JSX.Element {
  return (
    <div
      key={uuidv4()}
      className="flex px-[15px] gap-[10px] items-start relative w-full"
    >
      <img src={news4} alt="" className="w-[30px] h-[30px] " />
      <div className="flex flex-col gap-[10px] bg-white bg-opacity-5 p-[10px] rounded-2xl w-full relative">
        <h1 className="text-white text-[1.4rem] font-medium leading-[12px] leading-[18px]">
          {comment.user.username}
        </h1>
        <p className="text-[#fff] text-opacity-80 items-center gap-4 text-[1.4rem] font-normal leading-[18px] font-sans ">
          {comment.comment}
        </p>
        <div className="flex gap-5 pl-1 ">
          <button className="text-[1.4rem] text-blue-500  hover:underline font-semibold">
            Like
          </button>
          <button className="text-[1.4rem] text-[#959393] hover:underline font-semibold">
            Feedback
          </button>
          <span className="text-[#fff] text-opacity-50 items-center gap-4 text-[1.1rem] font-medium leading-[12px] flex">
            5 hour
          </span>
        </div>
        {comment.like > 0 && (
          <span className="absolute bottom-0 flex items-center gap-2 px-3 translate-y-1/2 bg-[#333333] right-5 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                className="text-blue-600  bg-[blue]"
                strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <span className="text-[#ccc] text-[1.4rem] font-medium">
              {comment.like}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
