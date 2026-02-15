import { Link } from "react-router-dom";
import SectionWrapper from "../layout-contact/SectionWrapper";
import { motion } from "framer-motion";

export default function getInTouch() {
  return (

      <section className="bg-[#e5e0da]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-green-900 
                 px-6 sm:px-10 md:px-16 lg:px-24 
                 py-16 md:py-24"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
        Live your life <br /> in full bloom
      </h1>

      <p className="text-base sm:text-lg mb-8">
        Therapy for Adults in Minneapolis, MN.
      </p>

      <Link to="/contact">
        <button className="border border-green-900 
                           px-6 sm:px-8 py-3 sm:py-4 
                           uppercase tracking-wide 
                           hover:bg-green-900 hover:text-white 
                           transition-all duration-300">
          Connect With Me →
        </button>
      </Link>
    </motion.div>

    {/* IMAGE SIDE */}
    <div className="w-full">
      <img
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
        alt="Flowers"
        className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover"
      />
    </div>

  </div>
</section>


  );
}
