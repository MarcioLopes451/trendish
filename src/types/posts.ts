export type Post = {
    id: string;
    profileImage: string;
    name: string;
    username: string;
    bio: string;
    text: string;
    title: string;
  };
  
  export type CommentType = {
    id: string;
    postId: string;
    profileImage: string;
    username: string;
    text: string;
    timestamp: Date;
  };