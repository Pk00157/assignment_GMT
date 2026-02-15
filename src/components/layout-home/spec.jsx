import React from 'react'
import SectionWrapper from "../layout-contact/SectionWrapper";
const spec = () => {
  const specialties = [
  {
    title: "Self-Esteem",
    desc: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
  },
  {
    title: "Relationships",
    desc: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
  },
  {
    title: "Burnout",
    desc: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
  },
];
  return (
    <>
    <div className="bg-[#f1ebe3] py-20 px-15">
        <SectionWrapper className="">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-5xl text-green-900 font-semibold mb-16 text-center">
          My Specialties
        </h2>

       <div className="grid md:grid-cols-3 gap-10">
  {specialties.map((item, index) => (
    <div
      key={index}
      className="border border-green-900 p-10 flex flex-col justify-between min-h-[620px]"
    >
      {/* Top Content */}
      <div>
        <h3 className="text-2xl font-semibold text-green-900 mb-6">
          {item.title}
        </h3>

        <p className="text-green-900 leading-relaxed">
          {item.desc}
        </p>
      </div>

      {/* Bottom Circle */}
      <div className="flex justify-center mt-12">
        <div className="w-72 h-72 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  ))}
</div>
      </div>
    </SectionWrapper>
    </div>
  </>
  )
}

export default spec