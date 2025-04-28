import { useState } from "react";
import userImg from "@/assets/UserProfile.png";
import profilePhoto from "@/assets/profilePhoto.png";
import { Post } from "@/types/post";
import { PostItem } from "./PostItem";
import { usePostInteractions } from "@/hooks/usePostInteractions";

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
      name: "Tony Stark",
      username: "@tony_stark_3000",
      bio: "Cognitive Person | Enthusiastic scientist | Worked on 300...",
      text: "Hiring for Stark Industries!",
      title: "Join Us",
    },
  ];

  const [posts] = useState<Post[]>(placeholderPosts);
  
  const {
    comments,
    likedPosts,
    messagedPosts,
    sharedPosts,
    isDmWindowOpen,
    activePostId,
    handleCommentChange,
    handleCommentSubmit,
    handleLikeClick,
    handleMessageClick,
    handleCloseDm,
    handleShareClick,
    handleSendDirectMessage
  } = usePostInteractions(posts);

  return (
    <section className="w-full rounded-[10px] pb-[26px] shadow-[0px_2px_50px_0px_#A9DEF93D] lg:w-[846px] lg:px-[27px] lg:py-[37px]">
      <div className="bg-white px-[7px]">
        <h2 className="tracking-0 border-b border-black pt-[10px] pb-[20px] text-[13px] leading-[100%] font-bold text-black">
          Posts
        </h2>
      </div>

      <div className="flex flex-col gap-[20px]">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            profilePhoto={profilePhoto}
            comment={comments[post.id] || ""}
            isLiked={!!likedPosts[post.id]}
            isMessaged={!!messagedPosts[post.id]}
            isShared={!!sharedPosts[post.id]}
            isDmWindowOpen={isDmWindowOpen}
            isActivePost={activePostId === post.id}
            onLikeClick={() => handleLikeClick(post.id)}
            onMessageClick={() => handleMessageClick(post.id)}
            onShareClick={() => handleShareClick(post.id)}
            onCommentChange={(value) => handleCommentChange(post.id, value)}
            onCommentSubmit={() => handleCommentSubmit(post.id)}
            onCloseDm={handleCloseDm}
            onSendDirectMessage={(message) => handleSendDirectMessage(post.id, message)}
          />
        ))}
      </div>
    </section>
  );
}