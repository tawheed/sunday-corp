"use client";

export default function Tracking({ event = "View Sales Page" }) {
  setTimeout(() => {
  if(typeof window !== "undefined" &&
    window.mixpanel) {
      console.log("Logging Mixpanel Event: ", event);
      window.mixpanel.track(event);
    }
    else {
      console.log("Mixpanel not loaded");
    }
  }, 1000);


  return <></>;
}
