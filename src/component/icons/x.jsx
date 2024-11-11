import { useState } from "react";

export default function XLogo() {
  const [hover, setHover] = useState("#f2e6f2ca");

  return (
    <a
      href="https://twitter.com/aakashvaa"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover("#fff")}
      onMouseLeave={() => setHover("#f2e6f2ca")}
      style={{ cursor: "pointer" }}
    >
      <GithubSVG color={hover} />
    </a>
  );
}

function GithubSVG({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 509.64"
      width="20"
      height="20  "
    >
      <rect width="512" height="509.64" rx="115.61" ry="115.61" />
      <path
        fill={color}
        fillRule="nonzero"
        d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
      />
    </svg>
  );
}
