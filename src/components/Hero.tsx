export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-yellow px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-10 -top-20 -z-10 size-72 rounded-full border-[40px] border-white/20 sm:right-12 sm:size-96" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-teal">
            <span aria-hidden="true">✨</span> A little joy for every paw
          </span>
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-teal sm:text-6xl lg:text-7xl">
            Good things for
            <br />
            <span className="relative inline-block">
              good pets.
              <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full rounded-full bg-white/60" />
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-teal/80 sm:text-xl">
            From new best friends to their favorite treats, find a little
            something to make every tail wag.
          </p>
          <a
            href="#shop"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-7 py-3 font-bold text-white shadow-lg shadow-teal/15 transition hover:-translate-y-0.5 hover:bg-teal/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
          >
            Browse the shop <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="absolute inset-4 rounded-[42%] bg-cream/75 shadow-inner" />
          <div className="absolute inset-10 rotate-6 rounded-[38%] border-2 border-dashed border-teal/20" />
          <span
            className="relative -rotate-6 text-[clamp(10rem,32vw,17rem)] leading-none drop-shadow-xl"
            role="img"
            aria-label="Happy dog"
          >
            🐶
          </span>
          <span className="absolute right-8 top-12 rotate-12 text-5xl" aria-hidden="true">⭐</span>
          <span className="absolute bottom-8 left-4 -rotate-12 text-5xl" aria-hidden="true">💛</span>
        </div>
      </div>
    </section>
  );
}
