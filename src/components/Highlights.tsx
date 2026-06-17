const highlights = [
  {
    title: "Real Iron",
    description:
      "Calibrated plates, competition bars, and racks built to be loaded — not photographed. Maintained weekly, never roped off.",
  },
  {
    title: "Coaches, not influencers",
    description:
      "Every trainer on the floor is certified and coaching full time. You get programming and corrections, not a content shoot.",
  },
  {
    title: "Earned results",
    description:
      "Strength, conditioning, and the kind of progress that holds up outside the building. We track it, you feel it.",
  },
  {
    title: "Open around the clock",
    description:
      "Keyed 24/7 access for members. Early, late, or in between — the room is yours when the work is.",
  },
];

const Highlights = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Section heading */}
          <div className="col-span-12 lg:col-span-4">
            <p className="kicker mb-6">What you actually get</p>
            <h2 className="font-display text-6xl leading-[0.9] lg:text-7xl">
              Built to be
              <br />
              <span className="text-primary">used hard</span>
            </h2>
          </div>

          {/* Numbered editorial list */}
          <ol className="col-span-12 lg:col-span-8">
            {highlights.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[3rem_1fr] gap-6 border-t border-border py-8 last:border-b sm:grid-cols-[5rem_1fr]"
              >
                <span className="font-display text-3xl text-muted-foreground sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-label text-xl font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
