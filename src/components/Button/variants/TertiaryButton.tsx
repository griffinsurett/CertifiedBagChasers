// src/components/Button/variants/TertiaryButton.tsx
/**
 * Tertiary Button Variant
 *
 * Gold/primary outlined button with transparent background.
 * Used for premium offerings that need distinction from secondary buttons.
 */

import { ButtonBase, type ButtonProps } from "../Button";
import { renderButtonIcon } from "../utils";

export default function TertiaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ButtonProps) {
  // Gold outline button styling for premium offerings
  const variantClasses = `
    bg-transparent border-2 border-primary text-primary
    font-bold uppercase tracking-wider
    rounded-lg
    hover:bg-primary/10
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
