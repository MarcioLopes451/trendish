type ButtonProps = {
  img: string;
  ariaLabel: string;
  onclick: () => void;
};

function Button({ img, ariaLabel, onclick }: ButtonProps) {
  return (
    <button className="" aria-label={ariaLabel} onClick={onclick}>
      <img src={img} alt="" />
    </button>
  );
}

export default Button;
