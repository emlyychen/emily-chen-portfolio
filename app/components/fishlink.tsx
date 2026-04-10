"use client";
import { useEffect, useRef, useState } from "react";

const FishLink = ({
  href = "https://www.youtube.com/watch?v=6_hl8AB7Uf0",
  interval = 12000,
  autoSwim = false,  // add this prop
}) => {
  const [visible, setVisible] = useState(false);
  const [dir, setDir] = useState("right");
  const [yPos, setYPos] = useState(50);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const swim = () => {
    const goRight = Math.random() > 0.5;
    setDir(goRight ? "right" : "left");
    const maxY = document.body.scrollHeight - 1000;
    setYPos(Math.random() * maxY);
    setVisible(true);
    setTimeout(() => setVisible(false), 8000);
  };

  useEffect(() => {
    if (autoSwim) swim(); // swim immediately if toggled on
    const delay = setTimeout(() => {
      if (!autoSwim) swim(); // otherwise wait 2s on first mount
      timerRef.current = setInterval(swim, interval);
    }, autoSwim ? 0 : 2000);

    return () => {
      clearTimeout(delay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [interval, autoSwim]);

  if (!visible) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute", // <-- was "fixed"
        top: yPos,
        left: 0,
        zIndex: 9999,
        cursor: "pointer",
        animation:
          dir === "right"
            ? "swimRight 8s linear forwards"
            : "swimLeft 8s linear forwards",
      }}
    >
      <FishSVG />
    </a>
  );
};

const FishSVG = () => (
  <svg
    width="140"
    height="56"
    viewBox="0 0 140 56"
    style={{ animation: "bodyBob 0.5s ease-in-out infinite" }}
  >
    <defs>
      <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8eef2" />
        <stop offset="40%" stopColor="#c8d8e4" />
        <stop offset="100%" stopColor="#8faec0" />
      </linearGradient>
      <linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0.7" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* tail */}
    <g
      style={{
        animation: "tailWag 0.4s ease-in-out infinite",
        transformOrigin: "22px 28px",
      }}
    >
      <path
        d="M22 28 L2 14 L8 28 L2 42 Z"
        fill="#b8cdd8"
        stroke="#8faec0"
        strokeWidth="0.5"
      />
    </g>

    {/* body */}
    <ellipse
      cx="76"
      cy="28"
      rx="52"
      ry="17"
      fill="url(#bodyGrad)"
      stroke="#8faec0"
      strokeWidth="0.5"
    />
    <path
      d="M 28 36 Q 76 46 122 34 Q 76 50 28 36Z"
      fill="#f0f4f7"
      opacity="0.6"
    />

    {/* dorsal fin */}
    <path
      d="M 50 15 L 68 2 L 85 13 Q 70 14 50 15 Z"
      fill="#b0c8d8"
      stroke="#8faec0"
      strokeWidth="0.4"
      style={{
        animation: "finWave 0.5s ease-in-out infinite",
        transformOrigin: "68px 10px",
      }}
    />

    {/* scale lines */}
    {[42, 56, 70, 84, 98, 112].map((x) => (
      <line
        key={x}
        x1={x}
        y1="13"
        x2={x}
        y2="41"
        stroke="#9ab8c8"
        strokeWidth="0.4"
        opacity="0.4"
      />
    ))}

    {/* shine */}
    <path
      d="M 30 20 Q 76 16 118 22 Q 118 24 30 22 Z"
      fill="url(#shineGrad)"
      opacity="0.8"
    />

    {/* eye */}
    <circle cx="119" cy="25" r="3.5" fill="white" />
    <circle cx="120" cy="25" r="2" fill="#2a3a42" />
    <circle cx="121" cy="24" r="0.7" fill="white" />
  </svg>
);

export default FishLink;
