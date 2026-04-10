"use client";
import { useState } from "react";
import FishLink from "./fishlink";

export default function FishToggle({ href }: { href: string }) {
  const [enabled, setEnabled] = useState(false); // start off
  const [toggleCount, setToggleCount] = useState(0);

  const handleToggle = () => {
    setEnabled((v) => !v);
    setToggleCount((c) => c + 1);
  };

  return (
    <>
      {enabled && (
        <FishLink
          href={href}
          autoSwim={true} // always immediate when mounted
          key={toggleCount} // remount on every toggle so swim fires fresh
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          margin: "2rem 0 0",
        }}
      >
        <span style={{ fontSize: "1rem" }}>🐟 go fishing</span>
        <button
          role="switch"
          aria-checked={enabled}
          onClick={handleToggle}
          style={{
            width: 44,
            height: 24,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            padding: 0,
            background: enabled ? "#378ADD" : "#ccc",
            position: "relative",
            transition: "background 0.25s",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 3,
              left: enabled ? 23 : 3,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "white",
              transition: "left 0.25s",
              display: "block",
            }}
          />
        </button>
      </div>
    </>
  );
}
