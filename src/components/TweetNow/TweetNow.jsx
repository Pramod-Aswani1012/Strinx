import React from 'react'

const TweetNow = ()=>{
    return(
        <>
            <div id="profile-user">
        <div id="profile-box" className="flex ">
          <img
            src="https://avatars.githubusercontent.com/u/79017406?s=400&u=afd722bfaa6bde4417c495ac110a8971e77c9432&v=4"
            alt=""
            id="user-img"
            className="h-12"
          />
          <div className="flex mb-2 text-white" >
            <h1 className="font-bold mr-2">matinturkaman</h1>
            <h1 id="name-user-r" className="text-[#8899A6] font-normal mr-2">@matinturkaman</h1>
            <h1 id="name-user-r" className="text-[#8899A6] font-normal">. Aug 10</h1>
          </div>
        </div>
        <div id="names" className="">
          <div id="post-box">


            <div id="tweet-user" className="mb-2 ">
              <p>{props.tweet}</p>
            </div>

            <div id="nav-icons-box" className="">
              <div id="nav-icons">
                <div id="comment-tweet-box">
                  <span id="blue-hover" className="hover">
                    <FaRegComment />
                  </span>
                  <p id="comment-tweet">{props.comment}</p>
                </div>
                <span id="retweet" className="hover">
                  <AiOutlineRetweet />
                </span>
                <div id="liked-box">
                  <span
                    onClick={likeHandler}
                    id={like === false ? "heart" : "liked"}
                    className="hover"
                  >
                    {like === false ? <AiOutlineHeart /> : <AiFillHeart />}
                  </span>
                  <p id={like === false ? "like-text" : "liked-text"}>
                    {like === true ? parseInt(props.like) + 1 : props.like}
                  </p>
                </div>
                <span className="hover" id="blue-hover">
                  <BiDownload />
                </span>
                <span className="hover" id="blue-hover">
                  <SiGoogleanalytics />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default TweetNow;