"use client";
export default function Tracking({ event }) {
    typeof window !== 'undefined' && window.mixpanel && window.mixpanel.track(event);
}
