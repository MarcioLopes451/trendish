import ShowFeedsItem from "./ShowFeedsItem";
import profilePhoto from "../../../assets/UserProfile.png";
import natureImg from "../../../assets/natureImage.png";
import { db } from "../../../../config/firebase";
import { getDocs, collection, doc, updateDoc, increment, getDoc, } from "firebase/firestore";
import { useState, useEffect } from "react";


type Post = {
  postHeader:string,
  postContent:string,
  like:number,
  id:string,
  userId: string;
  name?: string,
  username?:string;
  profileImage?:string
}

function ShowFeeds() {
  const [posts, setPosts] = useState<Post[]>([]);

  const postRef = collection(db,"posts")

  const showPosts = async () => {
    try {
      const postData = await getDocs(postRef);
      const postsWithAuthors = await Promise.all(
        postData.docs.map(async (post) => {
          
          const userDoc = await getDoc(doc(db, "users", post.data().userId));
          const userData = userDoc.data();
          
          return {
            id: post.id,
            postHeader: post.data().postHeader,
            postContent: post.data().postContent,
            like: post.data().like || 0,
            userId: post.data().userId,
            name: userData?.firstName + " " + userData?.lastName,
            username: userData?.username,
            profileImage: userData?.profileImage
          };
        })
      );
      setPosts(postsWithAuthors)

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
      
      <div>
        {posts.map((post) => (
          <ShowFeedsItem
          profileImage={post.profileImage || profilePhoto}
          name={post.name || ""}
          userId={post.username || ""}
          bioInfo="Smallest creature in this beautiful universe | Flying in colo..."
          postContent={post.postContent}
          postHeader={post.postHeader}
          commentUserprofileImage={post.profileImage || profilePhoto}
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
