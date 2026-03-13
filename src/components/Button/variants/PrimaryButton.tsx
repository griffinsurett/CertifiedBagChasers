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

  // Gold gradient button styling matching React project
  const variantClasses = `
    [background:var(--gradient-gold-metallic)]
    text-bg font-bold uppercase tracking-widest
    rounded
    hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(201,162,39,0.4)]
    transition-all duration-300
    [text-shadow:0_1px_0_rgba(255,255,255,0.3)]
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
