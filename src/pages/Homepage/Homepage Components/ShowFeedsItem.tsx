<<<<<<< HEAD
<<<<<<< HEAD

import shareIcon from "../../../assets/2849794_plane_paper airplane_send_airplane_multimedia_icon.png";



=======
import LikeShareComment from "../../../ui/LikeShareComment";
import shareIcon from "../../../assets/2849794_plane_paper airplane_send_airplane_multimedia_icon.png";

>>>>>>> f0c6aa7 (feat: created ShowFeedsItem component to display dynamic feed items)
=======

import shareIcon from "../../../assets/2849794_plane_paper airplane_send_airplane_multimedia_icon.png";



>>>>>>> ec43d90 (add: displaying posts via db)
type ShowFeedsItemProps = {
  profileImage: string;
  name: string;
  userId: string;
  bioInfo: string;
  postHeader?: string;
  postContent: string;
  commentUserprofileImage: string;
  postImage?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  likes?:number,
  handleLike: (postId:string) => void,
  postId:string
=======
>>>>>>> f0c6aa7 (feat: created ShowFeedsItem component to display dynamic feed items)
=======
  likes?:number,
  handleLike: (postId:string) => void,
  postId:string
>>>>>>> ec43d90 (add: displaying posts via db)
};

function ShowFeedsItem({
  profileImage,
  name,
  userId,
  bioInfo,
  postHeader,
  postContent,
  commentUserprofileImage,
  postImage,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec43d90 (add: displaying posts via db)
  likes,
  handleLike,
  postId
}: ShowFeedsItemProps) {

<<<<<<< HEAD
=======
}: ShowFeedsItemProps) {
>>>>>>> f0c6aa7 (feat: created ShowFeedsItem component to display dynamic feed items)
=======
>>>>>>> ec43d90 (add: displaying posts via db)
  return (
    <article className="bg-White mx-1.5 px-2 pt-2 pb-6">
      <div className="flex gap-4">
        <img src={profileImage} alt={name} className="h-14 w-11" />
        <div className="font-sora text-Black mt-4 text-xs leading-[0.94rem] font-normal">
          <h3 className="">
            {name} <span className="text-Black/50">@{userId}</span>
          </h3>
          <h4 className="mt-3">{bioInfo}...</h4>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-LightRed">{postHeader}</h4>
        <p className="font-sora text-Black mt-3.5 text-xs leading-[0.94rem] font-normal">
          {postContent}
        </p>

        {postImage && (
          <img src={postImage} alt="" className="mt-3.5 rounded-xl" />
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec43d90 (add: displaying posts via db)
        {/*<LikeShareComment /> */}
        {/* temp code just testing the like count */}
        <div className="mt-3 flex gap-5 border-b-[1px] pb-3">
          <button aria-label="Give a like to this post" onClick={() => handleLike(postId)}>like {likes}</button>
          <button aria-label="Comment on this post">comment</button>
          <button aria-label="Share this post">share</button>
        </div>
<<<<<<< HEAD
=======
        <LikeShareComment />
>>>>>>> f0c6aa7 (feat: created ShowFeedsItem component to display dynamic feed items)
=======
>>>>>>> ec43d90 (add: displaying posts via db)

        <div className="relative">
          <label htmlFor="userComment" className="sr-only">
            Write your comment
          </label>
          <textarea
            name="userComment"
            id="userComment"
            placeholder="Write your comment"
            className="bg-BlackGrey font-Rubik outline-Black mt-3 w-full resize-y rounded-xl py-3 pr-8 pl-4 text-sm leading-3.5 font-bold outline-1 focus:outline-1"
          />
          <button
            aria-label="click to comment your response"
            className="absolute top-1/2 right-3 -translate-y-1/2"
          >
            <img src={shareIcon} alt="" className="h-5 w-5" />
          </button>
        </div>
        <div>
          <img
            src={commentUserprofileImage}
            alt=""
            className="mt-3 h-10 w-10"
          />
        </div>
      </div>
    </article>
  );
}

export default ShowFeedsItem;
