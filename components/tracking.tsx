"use client";
import { Mixpanel } from "./common/mixpanel";

export default function Tracking({ event = "View Sales Page" }) {
  setTimeout(() => {
    if (typeof window !== "undefined" && window.mixpanel) {
      Mixpanel.track(event);
    } else {
      console.log("Mixpanel not loaded");
    }
  }, 1000);

  return <></>;
}
