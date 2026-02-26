export default function AboutPage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col justify-center">
      
      {/* TITLE */}
      <h2 className="text-xl text-gray-300 mb-4">
        About{" "}
        <span className="text-orange-500">Me</span>
      </h2>

      {/* MAIN TEXT */}
      <h1 className="text-4xl font-bold leading-tight mb-6 max-w-3xl">
        I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iusto maxime tempora at neque a adipisci nulla voluptatem?
        Mollitia, officiis, architecto earum voluptates obcaecati
        corrupti voluptatem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iusto maxime tempora at neque a adipisci
        nulla voluptatem.
      </p>

    </section>
  );
}