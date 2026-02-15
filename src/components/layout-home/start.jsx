export default function start() {
  return (
    <section className="w-full bg-[#7E7B45] text-[#F3F1E8]">

      <div className="
        max-w-4xl
        mx-auto
        px-6 md:px-10
        py-28 md:py-36
        text-center
      ">

        {/* Heading */}
        <h2 className="
          text-4xl md:text-5xl
          font-medium
          mb-10
        ">
          Get started today.
        </h2>

        {/* Paragraph */}
        <p className="
          text-lg md:text-xl
          leading-relaxed
          mb-14
          max-w-2xl
          mx-auto
        ">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting this
          therapeutic journey with you.
        </p>

        {/* Button */}
        <button className="
          border
          border-[#F3F1E8]
          px-8
          py-4
          text-sm
          tracking-widest
          uppercase
          hover:bg-[#F3F1E8]
          hover:text-[#7E7B45]
          transition
          duration-300
        ">
          GET IN TOUCH →
        </button>

      </div>

    </section>
  );
}
