export default function ContactPage() {
  return (
    <section className="bg-[#1d1c1d] rounded-2xl p-12 w-full flex flex-col">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold">
        Contact{" "}
        <span className="text-orange-500">Me</span>
      </h1>

      <p className="text-gray-400 mb-10">
        Let’s get in touch!
      </p>

      {/* FORM */}
      <form className="flex flex-col gap-8 max-w-3xl">

        {/* ROW 1 */}
        <div className="grid grid-cols-2 gap-8">
          <input
            placeholder="Email"
            className="bg-transparent border-b border-gray-200 outline-none py-2"
          />
          <input
            placeholder="Phone"
            className="bg-transparent border-b border-gray-200 outline-none py-2"
          />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-2 gap-8">
          <input
            placeholder="Name"
            className="bg-transparent border-b border-gray-200 outline-none py-2"
          />
          <input
            placeholder="Adress"
            className="bg-transparent border-b border-gray-200 outline-none py-2"
          />
        </div>

        {/* TEXTAREA */}
        <textarea
          placeholder="Content"
          className="bg-transparent border-b border-gray-200 outline-none py-2 resize-none h-24"
        />

        {/* CHECKBOX */}
        <label className="text-sm text-gray-400 flex items-center gap-2">
          <input type="checkbox" />
          I would like to receive the newsletter.
        </label>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-3 rounded-lg w-48"
        >
          Submit
        </button>

      </form>

    </section>
  );
}