import { useState } from "react";
import userImg from "../../../assets/UserProfile.png";
import commentIcon from "@/assets/commentIcon.svg";
import sendIcon from "@/assets/Send.svg";
import profilePhoto from "@/assets/profilePhoto.png";
import { HeartIcon } from "../../../icons/HeartIcon";

type Post = {
  id: string;
  profileImage: string;
  name: string;
  username: string;
  bio: string;
  text: string;
  title: string;
};

export function Posts() {
  const placeholderPosts: Post[] = [
    {
      id: "1",
      profileImage: userImg,
      name: "Tony Stark",
      username: "@tony_stark_3000",
      bio: "Cognitive Person | Enthusiastic scientist | Worked on 300...",
      text: "Looking for an amazing scientist who knows how to build a suit that can fly high in the sky without any problem.",
      title: "Immediate HIRING",
    },
    {
      id: "2",
      profileImage: userImg,
      name: "Pepper Potts",
      username: "@pepper_potts",
      bio: "CEO | Organizer",
      text: "Hiring for Stark Industries!",
      title: "Join Us",
    }
  ];

  const [posts] = useState<Post[]>(placeholderPosts);
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});

  const handleCommentChange = (
    postId: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setComments((prev) => ({ ...prev, [postId]: e.target.value }));
  };

  const handleCommentSubmit = (postId: string) => {
    if (comments[postId]?.trim()) {
      setComments((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  const handleLoveClick = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    console.log("likedPosts:", likedPosts);
  };

  return (
    <section className="flex w-full flex-col gap-[20px] rounded-[10px] bg-white px-[7px] pt-[10px] pb-[26px] shadow-[0px_2px_50px_0px_#A9DEF93D] lg:w-[846px] lg:px-[27px] lg:py-[37px]">
      <h2 className="tracking-0 text-[13px] leading-[100%] font-bold text-black">
        Posts
      </h2>
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col gap-[16px]">
          {/* Post Content */}
          <div className="border-y border-black py-[16px]">
            {/* Post Header */}
            <section className="flex w-full flex-row items-center gap-[9px] pb-[15px] lg:gap-[18px] lg:pb-[29px]">
              <div className="h-[56px] w-[43px] flex-shrink-0 overflow-hidden lg:h-[83.02px] lg:w-[78px]">
                <img
                  src={post.profileImage}
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <p className="tracking-0 text-Black flex flex-row gap-[8px] text-[12px] leading-[100%] font-semibold lg:flex-row lg:text-[16px]">
                  {post.name}
                  <span className="font-normal opacity-50 lg:text-[15.6px]">
                    {post.username}
                  </span>
                </p>
                <p className="tracking-0 text-Black text-[12px] leading-[100%] font-normal lg:text-[15.6px]">
                  {post.bio}
                </p>
              </div>
            </section>

            {/* Post Content */}
            <section className="mt-[5px] flex flex-col gap-[10px]">
              <h3 className="text-LightRed tracking-0 text-[12px] leading-[100%]">
                {post.title}
              </h3>
              <p className="mb-[16px] text-[14px] text-black">{post.text}</p>
            </section>

            {/* Icons */}
            <section className="flex gap-[20px]">
              <button
                onClick={() => handleLoveClick(post.id)}
                className={` cursor-pointer transition-transform duration-200 ${
                  likedPosts[post.id] ? "text-LightRed scale-120" : "scale-115"
                }`}
              >
                <HeartIcon />
              </button>
              <button>
                <img src={commentIcon} alt="comment icon" />
              </button>
              <button>
                <img src={sendIcon} alt="send icon" />
              </button>
            </section>
          </div>

          {/* Comment Section */}
          <section className="flex items-center gap-[11px]">
            <img
              src={profilePhoto}
              alt="Commenter avatar"
              className="h-[40px] w-[40px] drop-shadow-[3px_3px_1px_rgba(0,0,0,0.8)]"
            />
            <div className="relative flex-1">
              <input
                value={comments[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e)}
                className="tracking-0 bg-BlackGrey h-[37px] w-full rounded-lg border border-black py-[12px] pr-[40px] pl-[11px] text-[12px] leading-[100%] font-bold text-black placeholder:text-black focus:outline-none"
                placeholder="Write your comment..."
              />
              <button
                onClick={() => handleCommentSubmit(post.id)}
                className="absolute top-1/2 right-4 -translate-y-1/2"
              >
                <img src={sendIcon} alt="send icon" />
              </button>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}
