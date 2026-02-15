import React from 'react'
import SectionWrapper from '../layout-contact/SectionWrapper'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const workwme = () => {
  return (
     <section className="bg-[#e5e0da]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

    {/* LEFT IMAGE */}
    <div className="w-full">
      <img
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
        alt="Flowers"
        className="w-full h-[350px] sm:h-[500px] md:h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#d9d7e6] text-[#2d422f] 
                 flex flex-col justify-between 
                 px-6 sm:px-10 md:px-16 lg:px-20 
                 py-16 md:py-20"
    >
      {/* Top Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8">
          You don’t have to do this <br />
          all <span className="italic">alone.</span>
        </h2>

        <p className="mb-6 text-base sm:text-lg">
          If you are facing any of these, there’s hope:
        </p>

        <ul className="space-y-3 text-base sm:text-lg mb-8">
          <li>• Persistent feelings of sadness or hopelessness</li>
          <li>• Trouble focusing or making decisions</li>
          <li>• Difficulty maintaining relationships</li>
          <li>• Feeling constantly exhausted or unmotivated</li>
          <li>• A pervasive sense of being overwhelmed</li>
        </ul>

        <p className="text-base sm:text-lg leading-relaxed">
          With empathy and guidance, we'll work together to navigate
          the challenges life throws your way.
        </p>
      </div>

      {/* Bottom Button */}
      <Link to="/contact">
        <div className="border-t border-[#2d422f] mt-10 pt-6 text-center md:text-left">
          <button className="uppercase tracking-wide hover:opacity-70 transition">
            Work With Me →
          </button>
        </div>
      </Link>
    </motion.div>

  </div>
</section>

  )
}

export default workwme