import {ImageWithFallback} from "./ImageWithFallback";

interface LogoProps {
  /**
   * Visual context for the logo.
   * - "default": for light backgrounds (headers, pages)
   * - "onDark": for dark backgrounds (e.g., footer bar)
   */
  variant?: "default" | "onDark";
  className?: string;
  imgClassName?: string;
}

export function Logo({
  className = "",
  imgClassName,
  variant = "default",
}: LogoProps) {
  const logoUrl = new URL("../../assets/img/logo.png", import.meta.url).href;

  const effectForBackground =
    variant === "onDark"
      ? // Slightly lift brightness and add a prominent white glow/shadow so colors remain legible on dark BGs
        "brightness-110 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.5)]"
      : "";

  return (
    <div className={`flex items-center ${className}`}>
      <ImageWithFallback
        src={logoUrl}
        alt="Vyana Global"
        className={`${
          imgClassName ?? "h-10 md:h-12 lg:h-16"
        } w-auto object-contain ${effectForBackground}`}
        loading="eager"
        decoding="sync"
      />
      {/* <span className="sr-only">Vyana Global</span> */}
    </div>
  );
}
