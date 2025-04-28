import { Heart, MessageSquare, Share, Send, X } from "lucide-react";
import { Post } from "@/types/post";
import { DirectMessageWindow } from "./DirectMessageWindow";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { Input } from "@/ui/Input";

interface PostItemProps {
  post: Post;
  profilePhoto: string;
  comment: string;
  isLiked: boolean;
  isMessaged: boolean;
  isShared: boolean;
  isDmWindowOpen: boolean;
  isActivePost: boolean;
  onLikeClick: () => void;
  onMessageClick: () => void;
  onShareClick: () => void;
  onCommentChange: (value: string) => void;
  onCommentSubmit: () => void;
  onCloseDm: () => void;
  onSendDirectMessage: (message: string) => void;
}

export const PostItem = ({
  post,
  profilePhoto,
  comment,
  isLiked,
  isMessaged,
  isShared,
  isDmWindowOpen,
  isActivePost,
  onLikeClick,
  onMessageClick,
  onShareClick,
  onCommentChange,
  onCommentSubmit,
  onCloseDm,
  onSendDirectMessage,
}: PostItemProps) => {
  return (
    <div className="flex flex-col gap-[16px] bg-white px-[7px] pb-[20px]">
      {/* Post Content */}
      <div className="border-b border-black py-[16px]">
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
            onClick={onLikeClick}
            className={`cursor-pointer transition-transform duration-200 hover:text-red-500 ${
              isLiked ? "scale-105 text-red-500" : "text-gray-700"
            }`}
            aria-label={isLiked ? "Unlike post" : "Like post"}
          >
            <Heart
              className="h-5 w-5"
              fill={isLiked ? "currentColor" : "none"}
            />
          </button>

          <div className="relative flex items-center">
            <button
              onClick={onMessageClick}
              className={`cursor-pointer transition-transform duration-200 hover:text-blue-500 ${
                isMessaged ? "text-blue-500" : "text-gray-700"
              }`}
              aria-label="Message author"
            >
              <MessageSquare className="h-5 w-5" />
            </button>

            {isDmWindowOpen && isActivePost && (
              <DirectMessageWindow
                username={post.username}
                onClose={onCloseDm}
                onSend={(message) => onSendDirectMessage(message)}
              />
            )}
          </div>

          <button
            onClick={onShareClick}
            className={`cursor-pointer transition-transform duration-200 hover:text-green-500 ${
              isShared ? "text-green-500" : "text-gray-700"
            }`}
            aria-label="Share post"
          >
            <Share className="h-5 w-5" />
          </button>
        </section>
      </div>

      {/* Comment Section */}
      <section className="flex items-center gap-[11px]">
        <Avatar className="h-[40px] w-[40px] drop-shadow-[3px_3px_1px_rgba(0,0,0,0.8)]">
          <AvatarImage src={profilePhoto} alt="Your profile" />
          <AvatarFallback>YOU</AvatarFallback>
        </Avatar>

        <div className="relative flex-1">
          <Input
            value={comment || ""}
            onChange={(e: { target: any; key: string }) =>
              onCommentChange(e.target.value)
            }
            className="tracking-0 bg-BlackGrey h-[37px] w-full rounded-lg border border-black mt-1 py-[12px] pr-[40px] pl-[11px] text-[12px] leading-[100%] font-bold text-black placeholder:text-black focus:outline-none"
            placeholder="Write your comment..."
            onKeyDown={(e: { key: string }) =>
              e.key === "Enter" && onCommentSubmit()
            }
          />
          <button
            onClick={onCommentSubmit}
            className="absolute top-1/2 right-4 -translate-y-1/2"
            aria-label="Send comment"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
