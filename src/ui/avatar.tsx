import * as React from "react";
import { useState } from "react";

interface AvatarProps {
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
  [key: string]: any;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  children,
  "aria-label": ariaLabel,
  ...props
}) => (
  <div
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden  ${className || ""}`}
    role="img"
    aria-label={ariaLabel || "User avatar"}
    {...props}
  >
    {children}
  </div>
);

interface AvatarImageProps {
  className?: string;
  src: string;
  alt: string;
  [key: string]: any;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  className,
  src,
  alt,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-square h-full w-full object-cover ${className || ""} ${hasError ? "hidden" : ""}`}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};

interface AvatarFallbackProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={`flex h-full w-full items-center justify-center  bg-gray-200 text-black ${className || ""}`}
    {...props}
  >
    {children}
  </div>
);

export { Avatar, AvatarImage, AvatarFallback };
