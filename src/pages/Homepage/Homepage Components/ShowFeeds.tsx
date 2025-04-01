import ShowFeedsItem from "./ShowFeedsItem";

import profilePhoto from "../../../assets/UserProfile.png";
import commentUserProfileImage from "../../../assets/profilePhoto.png";
import natureImg from "../../../assets/natureImage.png";

function ShowFeeds() {
  return (
    <section className="mt-6 space-y-6 pb-6">
      <ShowFeedsItem
        profileImage={profilePhoto}
        name="Tony Stark"
        userId="tony_stark_3000"
        bioInfo="Cognitive Person | Enthusiastic scientist | Worked on 300"
        postHeader="*Immediate HIRING*"
        postContent="Looking for an amazing scientist who nows how to build a suit that can fly high in the sky without any problem."
        commentUserprofileImage={commentUserProfileImage}
      />

      <ShowFeedsItem
        profileImage={profilePhoto}
        name="Paul Rudd"
        userId="antman_wasp"
        bioInfo="Smallest creature in this beautiful universe | Flying in colo..."
        postContent="Exploring the amazin nature with my loved daughter and wife. These kind of visuals can soothen your mind, no matter what is your problem and it makes you to foret all your pains."
        commentUserprofileImage={commentUserProfileImage}
        postImage={natureImg}
      />
    </section>
  );
}

export default ShowFeeds;
