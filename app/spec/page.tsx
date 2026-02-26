export default function SpecPage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8">
        My{" "}
        <span className="text-orange-500">
          Specializations
        </span>
      </h1>

      {/* CARD LIST */}
      <div className="flex flex-col gap-6">

        {/* CARD 1 */}
        <div className="border border-orange-500 rounded-xl p-6 relative">
          <h2 className="font-semibold mb-2">
            Front end-developer
          </h2>

          <p className="text-gray-400 max-w-xl">
            Front-end is where I weave code and creativity
            to shape captivating and user-centric digital
            experiences.
          </p>

          <span className="absolute right-6 top-6 text-orange-500">
            {"</>"}
          </span>
        </div>

        {/* CARD 2 */}
        <div className="border border-orange-500 rounded-xl p-6 relative">
          <h2 className="font-semibold mb-2">
            UI/UX Designer
          </h2>

          <p className="text-gray-400 max-w-xl">
            UI/UX design is my palette for blending art
            and user psychology into seamless and
            delightful interactions.
          </p>

          <span className="absolute right-6 top-6 text-orange-500">
            🌐
          </span>
        </div>

        {/* CARD 3 */}
        <div className="border border-orange-500 rounded-xl p-6 relative">
          <h2 className="font-semibold mb-2">
            Graphic designer
          </h2>

          <p className="text-gray-400 max-w-xl">
            As a graphic designer, I transform ideas into
            visually striking and impactful designs.
          </p>

          <span className="absolute right-6 top-6 text-orange-500">
            ✒️
          </span>
        </div>

      </div>

    </section>
  );
}