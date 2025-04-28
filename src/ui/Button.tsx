import * as React from "react";

interface ButtonProps {
  img?: string;
  className?: string;
  ariaLabel: string;
  onclick: () => void;
  children?: React.ReactNode;
}

function Button({ img, className, ariaLabel, onclick, children }: ButtonProps) {
  return (
    <button className={className} aria-label={ariaLabel} onClick={onclick}>
      {img ? <img src={img} alt={ariaLabel} /> : children}
    </button>
  );
}

export default Button;
