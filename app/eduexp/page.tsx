export default function EduExpPage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col justify-center">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8">
        Education &{" "}
        <span className="text-orange-500">Experience</span>
      </h1>

      {/* LIST */}
      <div className="flex flex-col gap-8">

        {/* ITEM 1 */}
        <div>
          <p className="text-orange-500 mb-1">
            2022 - Present
          </p>

          <h2 className="text-lg font-semibold">
            UI/UX Designer
          </h2>
          <p className="text-gray-400 mb-2">
            Freelance
          </p>

          <h2 className="text-lg font-semibold">
            Fullstack Web Developer
          </h2>
          <p className="text-gray-400">
            Freelance
          </p>
        </div>

        {/* ITEM 2 */}
        <div>
          <p className="text-gray-400 mb-1">
            2022 - 2025
          </p>

          <h2 className="text-lg font-semibold">
            Bachelor Degree in Technology Digital and Innovation
          </h2>
          <p className="text-gray-400">
            Southeast Asia University
          </p>
        </div>

        {/* ITEM 3 */}
        <div>
          <p className="text-gray-400 mb-1">
            2016 - 2021
          </p>

          <h2 className="text-lg font-semibold">
            High school
          </h2>
          <p className="text-gray-400">
            Taweethapisek School
          </p>
        </div>

      </div>

    </section>
  );
}