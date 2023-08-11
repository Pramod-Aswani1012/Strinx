import React, { useState } from "react";
import NavBarLeft from "../NavBarLeft/NavBarLeft"
import Tweets from "../Tweets/Tweet"
import Chanels from "../chanels/chanel"
import Right from "../Right/Right"
import { LuStars } from "react-icons/lu"
import Main from "../Main/Main"
import { BiBarChartAlt} from "react-icons/bi";
// import { CgMoreAlt } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineFileGif, AiOutlineCalendar, AiFillHeart , AiFillDislike , AiOutlineDislike } from "react-icons/ai";
import { BsFillImageFill ,BsFillEmojiSmileFill } from "react-icons/bs";
import Chanel from "../chanels/chanel";


const Home = (props) => {
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
    <>
    <div className='flex justify-between bg-[#0F1419] text-white'>
    <NavBarLeft />
    <div className='border border-y-0 w-[54%] relative left-[20vw] '>
        <div className='flex justify-between border border-x-0 border-t-0 items-center mb-8'>
        <h1 className='text-3xl my-4 ml-4'>Home</h1>
        <LuStars color='white' size={30} className='mr-4'/>
        </div>
        <div>
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
              {/* <input type="text" name="" id="" placeholder="What's Happening?" className="text-[#8899A6] font-medium text-xl"/> */}
              <p className="text-[#8899A6] font-medium text-xl">What's Happening?</p>
              
            </div>


            <div id="tweet-user" className="mb-4 text-xl text-white">
              <p>{props.tweet}</p>
            </div>

          </div>
            <div id="nav-icons-box" className="justify-start">
              <div id="nav-icons" className="flex justify-between w-[39%] mb-4">
                <div id="comment-tweet-box">
                  <span id="blue-hover" className="cursor-pointer">
                    <BsFillImageFill size={19} color="white"/>
                  </span>
                  <p id="comment-tweet">{props.comment}</p>
                </div>
                <span id="retweet" className="cursor-pointer">
                  <AiOutlineFileGif size={19} color="white"/>
                </span>
                <div id="liked-box" className="flex items-center">
                <BiBarChartAlt size={19} color="white"/>
                </div>
                <span className="cursor-pointer" id="blue-hover">
                  <BsFillEmojiSmileFill size={19} color="white"/>
                </span>
                <div id="liked-box" className="flex items-center">
                  <AiOutlineCalendar size={19} color="white"/>
                  
                </div>
              </div>
            </div>
        </div>
        <div className="bg-blue-500 relative top-10 text-white rounded-full w-20 h-8 flex justify-center cursor-pointer items-center ">
                <Chanel  />
              </div>
      </div>
    </div>
        </div>
    <Tweets tweet="hello" like="0" dislike="0"/>
    <Tweets tweet={'"The only way to do great work is to love what you do." - Steve Jobs'} like="0" dislike="0"/>
    <Tweets tweet={`"In three words I can sum up everything I've learned about life: it goes on." - Robert Frost`} like="0" dislike="0"/>
    <Tweets tweet={`"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`} like="0" dislike="0"/>
    <Tweets tweet={`""The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`} like="0" dislike="0"/>
    </div>
    <Right />

    {/* <Chanels /> */}
    </div>
    {/* <Main /> */}

    </>
  );
};

export default Home;
