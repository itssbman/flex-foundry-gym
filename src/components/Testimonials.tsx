import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member since 2019",
    content:
      "Iron Gym is the first gym that actually stuck for me. The coaching is honest, the room is serious, and I'm stronger than I've ever been.",
  },
  {
    name: "Mike Chen",
    role: "Competitive lifter",
    content:
      "The 24/7 access fits my schedule and the platform is always free when I need it. No fluff, no waiting — just the work.",
  },
  {
    name: "Emily Rodriguez",
    role: "Member since 2021",
    content:
      "Strength work, conditioning, classes — it's all here without the influencer circus. People come to train, and it shows.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[currentIndex];

  return (
    <section className="border-t border-border bg-secondary/40 py-24 lg:py-32">
      <div className="container mx-auto grid grid-cols-12 gap-y-10 px-6 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-3">
          <p className="kicker">From the floor</p>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <blockquote
            key={currentIndex}
            className="animate-fade-in font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            <span className="text-primary">“</span>
            {active.content}
            <span className="text-primary">”</span>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
            <div>
              <p className="font-label text-lg font-semibold uppercase tracking-wide">
                {active.name}
              </p>
              <p className="kicker mt-1">{active.role}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-label text-sm tracking-widest text-muted-foreground">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
              <button
                onClick={prev}
                aria-label="Previous"
                className="border border-border p-3 transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="border border-border p-3 transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
