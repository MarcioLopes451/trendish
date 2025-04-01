type PostActionButtonProps = {
  img: string;
  description: string;
};

function PostActionButton({ img, description }: PostActionButtonProps) {
  return (
    <button className="flex items-center gap-1.5" aria-label={description}>
      <img
        src={img}
        alt=""
        className="bg-LightYellow h-8 w-6 rounded-full px-1.5 py-2"
      />
      <p className="text-Black font-sora text-xs leading-3.5 font-normal">
        {description}
      </p>
    </button>
  );
}

export default PostActionButton;
