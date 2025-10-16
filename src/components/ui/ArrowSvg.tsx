export default function ArrowSvg({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.69568 2L11 6.02862M11 6.02862L6.75696 10M11 6.02862L1 6.02862"
        stroke={color || "white"}
        stroke-linecap="square"
      />
    </svg>
  );
}

export function Arrow2Svg({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.42916 1.3605L12.7594 1.36035M12.7594 1.36035V11.5436M12.7594 1.36035L1.35938 12.7604"
        stroke={color || "black"}
        stroke-width="1.5"
      />
    </svg>
  );
}
