export const metadata = {
  title: "Unstoppable Sunday - The High Performance System for Founders",
  description:
    "Unstoppable Sunday helps you Pause and Reflect on the last 7 days and plan your next 7 days so you can operate at high performance and build the business of your dreams.",
};

import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Integrations from "@/components/integrations";
import Pricing from "@/components/pricing";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";
import Tracking from "@/components/tracking";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Tracking event='View Hompeage'></Tracking>
      <Hero />
      <Testimonials />
      <Features />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  );
}
