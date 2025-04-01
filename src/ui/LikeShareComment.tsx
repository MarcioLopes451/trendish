function LikeShareComment() {
  return (
    <div className="mt-3 flex gap-5 border-b-[1px] pb-3">
      <button aria-label="Give a like to this post">like</button>
      <button aria-label="Comment on this post">comment</button>
      <button aria-label="Share this post">share</button>
    </div>
  );
}

export default LikeShareComment;
