export default function HomePage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col justify-center">
      
      {/* SMALL TITLE */}
      <p className="text-lg text-gray-300 mb-2">
        Lets Work{" "}
        <span className="text-orange-500">Together !</span>
      </p>

      {/* MAIN TITLE */}
      <h1 className="text-5xl font-bold leading-tight mb-6">
        Hi From{" "}
        <span className="text-orange-500">Anothai</span> ,
        <br />
        Interactive Designer & Fullstack
        <br />
        Web Developer
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-2xl mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Iusto maxime tempora at neque a adipisci nulla voluptatem?
        Mollitia, officiis, architecto earum voluptates obcaecati
        corrupti voluptatem.
      </p>

      {/* STATS */}
      <div className="flex gap-16">
        <div>
          <h2 className="text-5xl text-orange-500 font-bold">
            3+
          </h2>
          <p className="text-gray-400">
            Years of Experience
          </p>
        </div>

        <div>
          <h2 className="text-5xl text-orange-500 font-bold">
            10+
          </h2>
          <p className="text-gray-400">
            Projects Completed
          </p>
        </div>
      </div>

    </section>
  );
}