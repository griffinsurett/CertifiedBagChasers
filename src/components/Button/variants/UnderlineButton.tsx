// src/components/Button/variants/UnderlineButton.tsx
/**
 * Underline Button Variant
 *
 * White underlined text link used as a secondary inline CTA.
 */

import { ButtonBase, type ButtonProps } from "../Button";
import { renderButtonIcon } from "../utils";

export default function UnderlineButton({
  leftIcon,
  rightIcon,
  className = "",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const sizeClass = size === "sm" ? "link-sm" : size === "lg" ? "link-lg" : "link-md";
  const variantClasses = `
    link-base ${sizeClass} p-0
    text-white underline underline-offset-4
    hover:text-white/85
    transition-colors duration-200
  `.replace(/\s+/g, " ").trim();

  return (
    <ButtonBase
      {...props}
      className={`${variantClasses} ${className}`.trim()}
      leftIcon={renderButtonIcon(leftIcon, size)}
      rightIcon={renderButtonIcon(rightIcon, size)}
      size={size}
    >
      {children}
    </ButtonBase>
  );
}
