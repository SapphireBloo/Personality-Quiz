export default function FireAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="fire-svg">
      <defs>
        <radialGradient id="flameGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff4500" />
        </radialGradient>
      </defs>
      <path
        fill="url(#flameGradient)"
        d="M100 10 C70 40, 50 90, 100 160 C150 90, 130 40, 100 10 Z"
      >
        <animate
          attributeName="d"
          dur="2s"
          repeatCount="indefinite"
          values="
            M100 10 C70 40, 50 90, 100 160 C150 90, 130 40, 100 10 Z;
            M100 10 C75 45, 55 95, 100 155 C145 95, 125 45, 100 10 Z;
            M100 10 C70 40, 50 90, 100 160 C150 90, 130 40, 100 10 Z
          "
        />
      </path>
    </svg>
  );
}
