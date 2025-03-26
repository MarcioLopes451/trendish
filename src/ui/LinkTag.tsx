import { Link } from "react-router-dom";

type LinkTagProps = {
  img: string;
  title: string;
  linkTo: string;
  danger: boolean;
};

function LinkTag({ img, title, linkTo, danger }: LinkTagProps) {
  return (
    <Link
      to={linkTo}
      className="flex items-center gap-3 mt-7"
      aria-label="Go to your profile"
    >
      <img
        src={img}
        alt=""
        className={`p-2 ${danger ? "bg-lightRed" : "bg-lightBlue"} rounded-sm`}
      />
      <p className="font-normal text-sm leading-4">{title}</p>
    </Link>
  );
}

export default LinkTag;
