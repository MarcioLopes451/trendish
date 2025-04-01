import PostActionButton from "../../../ui/PostActionButton";
import writePostIcon from "../../../assets/edit-2.png";
import uploadPhotoIcon from "../../../assets/gallery-add.png";
import uploadVideoIcon from "../../../assets/video-circle.png";

function CreatePost() {
  return (
    <article className="bg-White mx-1.5 py-6">
      <div className="border-b-Black/10 mx-1.5 flex justify-between border-b-[1px] pb-1.5">
        <PostActionButton description="Write a post" img={writePostIcon} />
        <PostActionButton description="Upload photo" img={uploadPhotoIcon} />
        <PostActionButton description="Upload video" img={uploadVideoIcon} />
      </div>
    </article>
  );
}

export default CreatePost;
