export default function EarthAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="earth-svg">
      <circle cx="100" cy="100" r="80" fill="#4caf50" />
      <circle cx="100" cy="100" r="60" fill="#81c784">
        <animate
          attributeName="r"
          values="60;65;60"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
