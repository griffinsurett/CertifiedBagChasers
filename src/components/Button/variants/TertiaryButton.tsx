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
  animate,
  animated,
  buttonWrapperClasses,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const shouldAnimate = animated ?? animate ?? true;
  const hasFullWidthClass = /\bw-full\b/.test(className);
  const hasFlexGrowClass = /\bflex-1\b/.test(className);
  const {
    ["data-animate"]: dataAnimate,
    ["data-animate-once"]: dataAnimateOnce,
    ["data-animate-delay"]: dataAnimateDelay,
    ["data-animate-threshold"]: dataAnimateThreshold,
    ["data-animate-root-margin"]: dataAnimateRootMargin,
    ["data-animate-directional"]: dataAnimateDirectional,
    ...restProps
  } = props as ButtonProps & {
    "data-animate"?: string;
    "data-animate-once"?: string;
    "data-animate-delay"?: string;
    "data-animate-threshold"?: string;
    "data-animate-root-margin"?: string;
    "data-animate-directional"?: string;
  };

  // Gold outline button styling for premium offerings
  const variantClasses = `
    bg-transparent cbc-border-2 text-primary
    font-bold uppercase tracking-wider
    rounded-lg
    hover:bg-primary/10
    transition-all duration-300
  `.replace(/\s+/g, ' ').trim();

  const animationProps = shouldAnimate
    ? {
        "data-animate": dataAnimate ?? "fade-in",
        "data-animate-once": dataAnimateOnce ?? "true",
        ...(dataAnimateDelay ? { "data-animate-delay": dataAnimateDelay } : {}),
        ...(dataAnimateThreshold
          ? { "data-animate-threshold": dataAnimateThreshold }
          : {}),
        ...(dataAnimateRootMargin
          ? { "data-animate-root-margin": dataAnimateRootMargin }
          : {}),
        ...(dataAnimateDirectional
          ? { "data-animate-directional": dataAnimateDirectional }
          : {}),
      }
    : {};

  const buttonContent = (
    <ButtonBase
      {...restProps}
      className={`${variantClasses} ${fullWidth || hasFullWidthClass ? "w-full" : ""} ${className}`.trim()}
      leftIcon={renderButtonIcon(leftIcon, restProps.size)}
      rightIcon={renderButtonIcon(rightIcon, restProps.size)}
    />
  );

  const needsWrapper =
    shouldAnimate || Boolean(buttonWrapperClasses) || hasFullWidthClass || hasFlexGrowClass;

  if (!needsWrapper) return buttonContent;

  return (
    <span
      {...animationProps}
      className={[
        "inline-flex",
        fullWidth || hasFullWidthClass ? "w-full" : "",
        hasFlexGrowClass ? "flex-1" : "",
        buttonWrapperClasses,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {buttonContent}
    </span>
  );
}
