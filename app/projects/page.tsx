import Image from "next/image";
export default function ProjectsPage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2">
        Featured{" "}
        <span className="text-orange-500">
          Projects
        </span>
      </h1>

      {/* SUB TITLE */}
      <h2 className="font-semibold mb-2">
        Manage Task App - fullstack web development
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-2xl mb-6">
        Here's my latest project built with Next.js and Laravel,
        using TailwindCSS on the front-end. Watch the video to
        see the responsive landing page in action!
      </p>

      {/* IMAGE PREVIEW */}
      <div className="w-full max-w-xl rounded-lg overflow-hidden">
        <Image
            src="/projects.png"
            alt="projects"
            width={800}
            height={180}
            className="rounded-xl object-cover"
            />
      </div>

    </section>
  );
}