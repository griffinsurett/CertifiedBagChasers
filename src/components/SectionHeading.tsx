import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const alignmentMap: Record<NonNullable<SectionHeadingProps['align']>, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  eyebrowClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeadingProps) => {
  const containerClasses = ['section-heading', alignmentMap[align], className].filter(Boolean).join(' ');
  const eyebrowClasses = ['section-eyebrow', eyebrowClassName].filter(Boolean).join(' ');
  const titleClasses = ['section-title', titleClassName].filter(Boolean).join(' ');
  const descriptionClasses = ['section-description', descriptionClassName].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {eyebrow && <span className={eyebrowClasses}>{eyebrow}</span>}
      <h2 className={titleClasses}>{title}</h2>
      {description && <p className={descriptionClasses}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
