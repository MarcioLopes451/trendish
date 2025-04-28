
import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { Post } from '@/types/post';


export const usePostInteractions = (posts: Post[]) => {
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [likedPosts, setLikedPosts] = useState<{ [key: string]: boolean }>({});
  const [messagedPosts, setMessagedPosts] = useState<{ [key: string]: boolean }>({});
  const [sharedPosts, setSharedPosts] = useState<{ [key: string]: boolean }>({});
  const [isDmWindowOpen, setIsDmWindowOpen] = useState(false);
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleCommentChange = (postId: string, value: string) => {
    setComments(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const handleCommentSubmit = (postId: string) => {
    if (comments[postId]?.trim()) {
      toast({
        title: "Comment posted",
        description: "Your comment has been posted successfully"
      });
      setComments(prev => ({ ...prev, [postId]: "" }));
    }
  };

  const handleLikeClick = (postId: string) => {
    setLikedPosts(prev => {
      const newState = { ...prev, [postId]: !prev[postId] };
      
      toast({
        title: newState[postId] ? "Post liked" : "Post unliked",
        description: newState[postId] 
          ? "You liked this post" 
          : "You removed your like from this post"
      });
      
      return newState;
    });
  };

  const handleMessageClick = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const isOpening = !(isDmWindowOpen && activePostId === postId);
      setIsDmWindowOpen(isOpening);
      setActivePostId(isOpening ? postId : null);
      
      if (isOpening) {
        setMessagedPosts(prev => ({ ...prev, [postId]: true }));
        setTimeout(() => {
          setMessagedPosts(prev => ({ ...prev, [postId]: false }));
        }, 500);
      }
    }
  };

  const handleCloseDm = () => {
    setIsDmWindowOpen(false);
    setActivePostId(null);
  };

  const handleShareClick = (postId: string) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
      const postLink = `https://trendish.com/post/${postId}`;
      navigator.clipboard.writeText(postLink)
        .then(() => {
          setSharedPosts(prev => ({ ...prev, [postId]: true }));
          setTimeout(() => {
            setSharedPosts(prev => ({ ...prev, [postId]: false }));
          }, 500);
          
          toast({
            title: "Link copied",
            description: "Post link copied to clipboard"
          });
        })
        .catch(err => {
          console.error("Failed to copy link:", err);
          toast({
            title: "Error",
            description: "Failed to copy link to clipboard",
            variant: "destructive"
          });
        });
    }
  };

  const handleSendDirectMessage = (postId: string, message: string) => {
    if (message.trim()) {
      toast({
        title: "Message sent",
        description: "Your direct message has been sent"
      });
      handleCloseDm();
    }
  };

  return {
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
  };
};