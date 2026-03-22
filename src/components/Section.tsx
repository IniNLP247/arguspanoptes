import type { CSSProperties, ReactNode } from "react";

function Section({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const mergedClassName = className ? `section ${className}` : "section";

  return (
    <div className={mergedClassName} style={style}>
      {children}
    </div>
  );
}

export default Section;
