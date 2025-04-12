import { useState } from "react";
import userImg from "../../../assets/UserProfile.png";
import heartIcon from "@/assets/heartIcon.svg";
import commentIcon from "@/assets/commentIcon.svg";
import sendIcon from "@/assets/Send.svg";
import profilePhoto from "@/assets/profilePhoto.png";

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
  // Placeholder data until real data comes
  const placeholderPosts: Post[] = [
    {
      id: "1",
      profileImage: userImg,
      name: "Tony Stark",
      username: "@tony_stark_3000",
      bio: "Cognitive Person | Enthusiastic scientist | Worked on 300...",
      text: "Looking for an amazing scientist who knows how to build a suit that can fly high in the sky without any problem.",
      title: "Immediate HIRING", // Removed ** for clean text
    },
  ];

  // State for posts (use placeholder for now, replace with API data later)
  const [posts] = useState<Post[]>(placeholderPosts);

  // State for comments (per post)
  const [comments, setComments] = useState<{ [key: string]: string }>({});

  // Handle comment input change
  const handleCommentChange = (
    postId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComments((prev) => ({ ...prev, [postId]: e.target.value }));
  };

  // Handle comment submission
  const handleCommentSubmit = (postId: string) => {
    if (comments[postId]?.trim()) {
      // Later: Send comment to API with postId
      setComments((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  return (
    <section className="w-full lg:w-[846px] flex flex-col gap-[20px] bg-white shadow-[0px_2px_50px_0px_#A9DEF93D] rounded-[10px] pt-[10px] pb-[26px] lg:py-[37px] px-[7px] lg:px-[27px]">
      <h2 className="font-bold text-[13px] leading-[100%] tracking-0 text-black">
        Posts
      </h2>
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col gap-[16px]">
          {/* Post Content */}
          <div className="border-y border-black py-[16px]">
            {/* Post Header */}
            <section className="flex flex-row items-center gap-[9px] lg:gap-[18px] pb-[15px] lg:pb-[29px] w-full">
              <div className="w-[43px] h-[56px] overflow-hidden lg:w-[78px] lg:h-[83.02px] flex-shrink-0">
                <img
                  src={post.profileImage}
                  alt="User profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[16px]">
                <p className="text-[12px] lg:text-[16px] tracking-0 leading-[100%] font-semibold text-Black flex flex-row gap-[8px] lg:flex-row">
                  {post.name}
                  <span className="opacity-50 lg:text-[15.6px] font-normal">
                    {post.username}
                  </span>
                </p>
                <p className="tracking-0 leading-[100%] text-[12px] lg:text-[15.6px] font-normal text-Black">
                  {post.bio}
                </p>
              </div>
            </section>

            {/* Post Content */}
            <section className="flex flex-col gap-[10px] mt-[5px]">
              <h3 className="text-[12px] text-LightRed tracking-0 leading-[100%]">
                {post.title}
              </h3>
              <p className="text-[14px] text-black mb-[16px]">{post.text}</p>
            </section>

            {/* Icons */}
            <section className="flex gap-[20px]">
              <button>
                <img src={heartIcon} alt="heart icon" />
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
              className="w-[40px] h-[40px] drop-shadow-[3px_3px_1px_rgba(0,0,0,0.8)]"
            />
            <div className="relative flex-1">
              <input
                value={comments[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e)}
                className="w-full h-[37px] border border-black focus:outline-none text-[12px] font-bold leading-[100%] tracking-0 text-black placeholder:text-black rounded-lg py-[12px] pl-[11px] pr-[40px] bg-BlackGrey"
                placeholder="Write your comment..."
              />
              <button
                onClick={() => handleCommentSubmit(post.id)}
                className="absolute top-1/2 -translate-y-1/2 right-4"
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


