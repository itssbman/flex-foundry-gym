import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "14", label: "Years on the floor" },
  { value: "40+", label: "Weekly classes" },
  { value: "24/7", label: "Member access" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border">
      {/* Oversized outlined numeral — the only "imagery", purely typographic */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-24 select-none font-display text-[42vw] leading-none text-transparent md:top-10 md:text-[34vw]"
        style={{ WebkitTextStroke: "1px hsl(var(--border))" }}
      >
        01
      </span>

      <div className="container relative z-10 mx-auto grid min-h-screen grid-cols-12 items-center gap-8 px-6 pt-24">
        {/* Left: editorial headline block */}
        <div className="col-span-12 lg:col-span-8">
          <p className="kicker mb-8 flex items-center gap-3 animate-rise">
            <span className="h-px w-10 bg-primary" />
            Est. 2010 — Strength &amp; Conditioning
          </p>

          <h1 className="font-display text-[18vw] leading-[0.82] sm:text-[14vw] lg:text-[10rem] animate-rise">
            Forge a
            <br />
            <span className="text-primary">stronger</span> self
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:120ms]">
            No mirrors-and-marketing fitness theatre. Iron Gym is raw
            iron, honest coaching, and a room full of people who show up. Train
            on your terms — we just hold the standard.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-rise [animation-delay:200ms]">
            <Button
              size="lg"
              className="h-14 rounded-none px-8 font-label text-base uppercase tracking-widest"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-14 rounded-none px-2 font-label text-base uppercase tracking-widest text-foreground underline-offset-8 hover:bg-transparent hover:text-primary hover:underline"
            >
              View Classes
            </Button>
          </div>
        </div>

        {/* Right: stat ledger */}
        <div className="col-span-12 lg:col-span-4 lg:pl-8 animate-rise [animation-delay:280ms]">
          <dl className="flex flex-row justify-between gap-6 border-t border-border pt-6 lg:flex-col lg:gap-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-5xl leading-none lg:text-6xl">
                  {stat.value}
                </dt>
                <dd className="kicker mt-2">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
