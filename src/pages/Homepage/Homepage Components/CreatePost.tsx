import PostActionButton from "../../../ui/PostActionButton";
import writePostIcon from "../../../assets/edit-2.png";
import uploadPhotoIcon from "../../../assets/gallery-add.png";
import uploadVideoIcon from "../../../assets/video-circle.png";

type CreatePostProps = {
  isMenuOpen: boolean;
};

function CreatePost({ isMenuOpen }: CreatePostProps) {
  return (
    <article className="bg-White mx-1.5 py-6">
      <div className="border-b-Black/10 mx-1.5 flex justify-between border-b-[1px] pb-1.5">
        <PostActionButton description="Write a post" img={writePostIcon} />
        <PostActionButton description="Upload photo" img={uploadPhotoIcon} />
        <PostActionButton description="Upload video" img={uploadVideoIcon} />
      </div>

      <div
        className={`bg-IceBlue relative mx-2 mt-4 rounded-xl ${isMenuOpen && "-z-10"}`}
      >
        <textarea
          placeholder="Write something here..."
          className="focus:ring-IceBlue w-full py-5 pr-1.5 pl-9 focus:border-transparent focus:ring-2"
        />
        <img
          src={writePostIcon}
          alt="Write a post"
          className="absolute top-1/2 left-2.5 -translate-y-1/2"
        />
      </div>
    </article>
  );
}

export default CreatePost;
