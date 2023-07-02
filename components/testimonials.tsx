import Image from "next/image";
import TestimonialsImage01 from "@/public/images/testimonial-ono.jpg";
import TestimonialsImage02 from "@/public/images/testimonial-tk.jpg";
import TestimonialsImage03 from "@/public/images/testimonial-stephen.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      profile: TestimonialsImage01,
      testimonial:
        "It gives me a reboot so that I can redirect my focus to my future self. Allowing my present goals to be aligned with my vision.",
      name: "Onorato Lee Johnson",
      title: "Founder, Cloveo",
    },
    {
      profile: TestimonialsImage02,
      testimonial:
        "I've used the Unstoppable Sunday system over the past decade to accomplish some of my wildest goals.",
      name: "TK Kader",
      title: "Founder, Unstoppable",
    },
    {
      profile: TestimonialsImage03,
      testimonial:
        "It helps you stop, focus and reset, and put the week ahead into perspective.",
      name: "Stephen Hickey",
      title: "Founder, Digital Control Room",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-slate-800">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {testimonials.map((testimonial, index) => (
              <article
                className="h-full flex flex-col items-center text-center"
                data-aos="fade-up"
              >
                <header className="mb-3">
                  <Image
                    className="rounded-full inline-flex"
                    src={testimonial.profile}
                    width={40}
                    height={40}
                    alt="Testimonial 01"
                  />
                </header>
                <div className="grow mb-3">
                  <p className="text-slate-500 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                <footer className="text-sm text-slate-500 font-medium">
                  <a
                    className="text-slate-300 hover:text-white transition duration-150 ease-in-out"
                    href="#0"
                  >
                    {testimonial.name}
                  </a>{" "}
                  - <span className="text-indigo-500">{testimonial.title}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
