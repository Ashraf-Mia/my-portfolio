import { useState } from "react";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
};

export default function SafeImage({
  src,
  alt,
  className = "",
  fallback,
}: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
