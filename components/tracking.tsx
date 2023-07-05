"use client";
export default function Tracking({ event = "View Sales Page" }) {
  typeof window !== "undefined" &&
    window.mixpanel &&
    window.mixpanel.track(event);

  return <></>;
}
