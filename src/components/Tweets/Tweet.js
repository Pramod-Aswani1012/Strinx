import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
// import { CgMoreAlt } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart , AiFillDislike , AiOutlineDislike } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import Chanel from "../chanels/chanel";

const Tweet = (props) => {
  const [like, setLike] = useState(false);
  const [dislike, setdisLike] = useState(false);

  const likeHandler = () => {
    if (like === false) {
      setLike(true);
    } else if (like === true) {
      setLike(false);
    }
  };

  const DislikeHandler = () => {
    if (dislike === false) {
      setdisLike(true);
    } else if (dislike === true) {
      setdisLike(false);
    }
  };

  return (
    <div className="flex w-[95%] m-auto mb-6">
      <div id="profile-user" className="flex justify-between ">
        <div id="profile-box" className="flex ">
          <img
            src="https://avatars.githubusercontent.com/u/79017406?s=400&u=afd722bfaa6bde4417c495ac110a8971e77c9432&v=4"
            alt=""
            id="user-img"
            className="h-12"
          />
        </div>
        <div id="names" className="flex justify-start flex-col w-full   ">
          <div id="post-box" className="">
            <div className="flex mb-2 w-full items-center">
              <div className="flex text-xl text-white">
              <h1 className="font-bold mr-2 ">matinturkaman</h1>
              <h1 id="name-user-r" className="text-[#8899A6] font-normal mr-2">@matinturkaman</h1>
              <h1 id="name-user-r" className="text-[#8899A6] font-normal">. Aug 10</h1>
              </div>
              
            </div>


            <div id="tweet-user" className="mb-4 text-xl text-white">
              <p>{props.tweet}</p>
            </div>

          </div>
            <div id="nav-icons-box" className="justify-start">
              <div id="nav-icons" className="flex justify-between w-[64%]">
                <div id="comment-tweet-box">
                  <span id="blue-hover" className="cursor-pointer">
                    <FaRegComment size={19} color="white"/>
                  </span>
                  <p id="comment-tweet">{props.comment}</p>
                </div>
                <span id="retweet" className="cursor-pointer">
                  <AiOutlineRetweet size={19} color="white"/>
                </span>
                <div id="liked-box" className="flex items-center">
                  <span
                    onClick={likeHandler}
                    id={like === false ? "heart" : "liked"}
                    className="cursor-pointer"
                  >
                    {like === false ? <AiOutlineHeart size={19} color="white"/> : <AiFillHeart size={19} />}
                  </span>
                  <p id={like === false ? "like-text" : "liked-text"} className="text-white">
                    {like === true ? parseInt(props.like) + 1 : props.like}
                  </p>
                </div>
                <span className="cursor-pointer" id="blue-hover">
                  <BiDownload size={19} color="white"/>
                </span>
                <div id="liked-box" className="flex items-center">
                  <span
                    onClick={DislikeHandler}
                    id={dislike === false ? "heart" : "liked"}
                    className="cursor-pointer"
                  >
                    {dislike === false ? <AiOutlineDislike size={19} color="white"/> : <AiFillDislike size={19} />}
                  </span>
                  <p id={dislike === false ? "like-text" : "liked-text"} className="text-white">
                    {dislike === true ? parseInt(props.dislike) + 1 : props.dislike}
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="bg-blue-500 text-white rounded-full w-20 h-8 flex justify-center cursor-pointer items-center ">
                <Chanel  />
              </div>
      </div>
    </div>
  );
};

export default Tweet;
