export default function AirAnimation() {
  return (
    <svg viewBox="0 0 200 80" className="air-svg">
      <ellipse cx="50" cy="40" rx="30" ry="15" fill="#ddd" opacity="0.6">
        <animate
          attributeName="cx"
          values="50;150;50"
          dur="6s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="130" cy="40" rx="30" ry="15" fill="#eee" opacity="0.4">
        <animate
          attributeName="cx"
          values="130;30;130"
          dur="8s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}
