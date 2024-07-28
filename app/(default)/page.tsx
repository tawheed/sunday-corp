export const metadata = {
  title: "Unstoppable Sunday - Transform Your Life into an Unstoppable High Performance Entrepreneur",
  description:
    "Unstoppable Sunday implement the EXACT HABITS of the top 1% of the world's most successful CEOs use.",
};

import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Features from "@/components/features";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import Features04 from "@/components/features-04";
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
      <Features02 />
      <Features03 />
      <Features04 />
      <Features />

      <Pricing />
      <Faqs />
      <Cta />
    </>
  );
}
