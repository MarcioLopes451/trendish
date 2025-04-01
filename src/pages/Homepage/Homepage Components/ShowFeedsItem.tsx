import LikeShareComment from "../../../ui/LikeShareComment";
import shareIcon from "../../../assets/2849794_plane_paper airplane_send_airplane_multimedia_icon.png";

type ShowFeedsItemProps = {
  profileImage: string;
  name: string;
  userId: string;
  bioInfo: string;
  postHeader?: string;
  postContent: string;
  commentUserprofileImage: string;
  postImage?: string;
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
}: ShowFeedsItemProps) {
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
        <LikeShareComment />

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
