import React from 'react'
import SectionWrapper from '../layout-contact/SectionWrapper'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
const chat = () => {
  return (
    <>
    <section className="bg-[#e5e0da]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-center 
                    px-6 sm:px-10 md:px-16 lg:px-20 
                    py-16 md:py-24 
                    text-[#2f3e2e]">

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 md:mb-8 leading-tight">
        Hi, I’m Lilac.
      </h1>

      {/* Paragraph */}
      <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-8 md:mb-12">
        I'm committed to providing a safe and supportive environment 
        where we can explore your thoughts, feelings, and behaviors. 
        With empathy and guidance, we'll work together to navigate the 
        challenges life throws your way.
      </p>

      {/* Button */}
      <button className="border border-[#2f3e2e] 
                         px-6 sm:px-8 py-3 sm:py-4 
                         uppercase tracking-wider 
                         hover:bg-[#2f3e2e] hover:text-white 
                         transition duration-300 
                         w-fit">
        Let’s Chat →
      </button>
    </div>

    {/* RIGHT IMAGES */}
    <div className="relative flex items-center justify-center 
                    py-10 md:py-0">

      {/* Large Arch Image */}
      <div className="w-[280px] h-[380px] 
                      sm:w-[350px] sm:h-[480px] 
                      md:w-[420px] md:h-[600px] 
                      overflow-hidden rounded-t-full">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
          alt="Lilac with flowers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Small Circle Image */}
      <div className="absolute 
                      bottom-[-40px] right-4 
                      sm:right-10 
                      w-40 h-40 
                      sm:w-56 sm:h-56 
                      md:w-72 md:h-72 
                      rounded-full 
                      overflow-hidden shadow-lg">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
          alt="Flowers"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>

    </>
  )
}

export default chat