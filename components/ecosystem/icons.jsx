// Line icons for the Ecosystem page, drawn to match the Figma icons (24×24 grid).
// To use the exact Figma exports instead, save them in /public/icons and swap the <svg> for <img>.

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function LandmarkIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7" />
      <path d="M12 3 20 8H4l8-5Z" />
    </svg>
  );
}

export function BrainIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5a3 3 0 0 0-5.8 1A3 3 0 0 0 4 11a3 3 0 0 0 1.5 5.2A3 3 0 0 0 12 18Z" />
      <path d="M12 5a3 3 0 0 1 5.8 1A3 3 0 0 1 20 11a3 3 0 0 1-1.5 5.2A3 3 0 0 1 12 18Z" />
      <path d="M12 5v13M8 10h1.5M14.5 10H16M8.5 14H10M14 14h1.5" />
    </svg>
  );
}

export function RocketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function BulbIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </svg>
  );
}

export function CapIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function CubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
    </svg>
  );
}

export function HubIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="3.5" r="1.5" />
      <circle cx="19.4" cy="7.75" r="1.5" />
      <circle cx="19.4" cy="16.25" r="1.5" />
      <circle cx="12" cy="20.5" r="1.5" />
      <circle cx="4.6" cy="16.25" r="1.5" />
      <circle cx="4.6" cy="7.75" r="1.5" />
      <path d="M12 9.5V5M14.2 10.75l3.9-2.25M14.2 13.25l3.9 2.25M12 14.5V19M9.8 13.25 5.9 15.5M9.8 10.75 5.9 8.5" />
    </svg>
  );
}

export function StarBadgeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7.5 1.3 2.9 3.1.3-2.35 2.05.7 3.05L12 14.2l-2.75 1.6.7-3.05L7.6 10.7l3.1-.3L12 7.5Z" />
    </svg>
  );
}
