// src/components/Button/variants/PrimaryButton.tsx
/**
 * Primary Button Variant
 *
 * Gold gradient button - the default and most prominent button style.
 * Used for primary actions like form submissions, main CTAs.
 */

import { ButtonBase, type ButtonProps } from "../Button";
import { renderButtonIcon } from "../utils";

/**
 * Primary button with gold gradient background
 */
export default function PrimaryButton({
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: ButtonProps) {
  // Gold gradient button styling matching React project
  const variantClasses = `
    bg-gradient-to-r from-primary-900 via-primary-600 to-primary-100
    hover:from-primary-800 hover:via-primary hover:to-primary-50
    text-bg font-bold uppercase tracking-widest
    rounded
    hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(201,162,39,0.4)]
    transition-all duration-300
    [text-shadow:0_1px_0_rgba(255,255,255,0.3)]
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
