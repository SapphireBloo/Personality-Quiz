export default function WaterAnimation() {
  return (
    <svg viewBox="0 0 200 60" className="water-svg">
      <path
        fill="#00aaff"
        d="M0 30 Q 20 10, 40 30 T 80 30 T 120 30 T 160 30 T 200 30 V 60 H 0 Z"
      >
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values="
            M0 30 Q 20 10, 40 30 T 80 30 T 120 30 T 160 30 T 200 30 V 60 H 0 Z;
            M0 25 Q 20 20, 40 25 T 80 25 T 120 25 T 160 25 T 200 25 V 60 H 0 Z;
            M0 30 Q 20 10, 40 30 T 80 30 T 120 30 T 160 30 T 200 30 V 60 H 0 Z
          "
        />
      </path>
    </svg>
  );
}
