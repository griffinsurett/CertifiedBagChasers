// src/components/Button/variants/SecondaryButton.tsx
/**
 * Secondary Button Variant
 *
 * White outlined button with transparent background.
 * Used for secondary actions that need less emphasis than primary buttons.
 */

import { ButtonBase, type ButtonProps } from "../Button";
import { renderButtonIcon } from "../utils";

export default function SecondaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ButtonProps) {
  // White outline button styling matching React project
  const variantClasses = `
    bg-transparent border-2 border-white text-white
    font-bold uppercase tracking-wider
    rounded-lg
    hover:bg-white/10
    transition-all duration-300
  `.replace(/\s+/g, ' ').trim();

  return (
    <ButtonBase
      {...props}
      className={`${variantClasses} ${className}`}
      leftIcon={renderButtonIcon(leftIcon, props.size)}
      rightIcon={renderButtonIcon(rightIcon, props.size)}
    />
  );
}
