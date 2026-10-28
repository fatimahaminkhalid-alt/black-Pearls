import { Fragment } from "react";

// Renders text that may be split into design line breaks.
// A string renders as-is; an array renders its parts with a <br> between them
// (hidden below the breakpoint in `className`, so small screens wrap naturally).
export default function Breaks({ text, className = "hidden lg:block" }) {
  if (!Array.isArray(text)) return text;
  return text.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          {" "}
          <br className={className} />
        </>
      )}
      {part}
    </Fragment>
  ));
}
