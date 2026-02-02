export default function ArrowSvg({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 11.2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 0.916992L10.0833 5.50033L5.5 10.0837M0 5.5H9.5"
        stroke={color || "white"}
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
        strokeWidth="1.5"
      />
    </svg>
  );
}
