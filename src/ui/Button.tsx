type ButtonProps = {
  img: string;
  ariaLabel: string;
  alt: string;
  onclick: () => void;
};

function Button({ img, ariaLabel, alt, onclick }: ButtonProps) {
  return (
    <button className="" aria-label={ariaLabel} onClick={onclick}>
      <img src={img} alt={alt} />
    </button>
  );
}

export default Button;
