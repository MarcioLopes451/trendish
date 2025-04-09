import ShowFeedsItem from "./ShowFeedsItem";
import profilePhoto from "../../../assets/UserProfile.png";
import commentUserProfileImage from "../../../assets/profilePhoto.png";
import natureImg from "../../../assets/natureImage.png";
import { db } from "../../../../config/firebase";
import { getDocs, collection, doc, updateDoc, increment, } from "firebase/firestore";
import { useState, useEffect } from "react";

type Post = {
  postHeader:string,
  postContent:string,
  like:number,
  id:string,
}

function ShowFeeds() {
  const [posts, setPosts] = useState<Post[]>([]);

  const postRef = collection(db,"posts")

  const showPosts = async () => {
    try {
      const postData = await getDocs(postRef);
      const filteredData = postData.docs.map((post) => ( {
        id:post.id,
        postHeader: post.data().postHeader,
        postContent:post.data().postContent,
        like:post.data().like || 0
      }));
      setPosts(filteredData)

    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    showPosts();

  },[])

  const handleLike = async (postId:string) => {
    try {
      const postRef = doc(db, "posts", postId)
      await updateDoc(postRef, {
        like: increment(1)
      })

    } catch(error) {
      console.error(error)
    }
  }
  return (
    <section className="mt-6 space-y-6 pb-6">
      {/* <ShowFeedsItem
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
      /> */}
      <div>
        {posts.map((post) => (
          <ShowFeedsItem
          profileImage={profilePhoto}
          name="Paul Rudd"
          userId="antman_wasp"
          bioInfo="Smallest creature in this beautiful universe | Flying in colo..."
          postContent={post.postHeader}
          postHeader={post.postHeader}
          commentUserprofileImage={commentUserProfileImage}
          postImage={natureImg}
          key={post.id}
          likes={post.like}
          handleLike={handleLike}
          postId={post.id}
        />
        ))}
      </div>
    </section>
  );
}

export default ShowFeeds;
