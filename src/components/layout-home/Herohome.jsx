import { Link } from "react-router-dom";
import SectionWrapper from "../layout-contact/SectionWrapper";
import { motion } from "framer-motion";

export default function Herohome() {
  return (

        <section className="min-h-screen bg-[#f3eee9] flex items-center justify-center px-5 pt-32">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src={"https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"}
              alt="Flowers"
              className="w-[600px] h-[800px] object-cover rounded-t-full"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-green-900"
          >
            <h1 className="text-6xl font-semibold leading-tight mb-6">
              Live your life <br /> in full bloom
            </h1>

            <p className="text-lg mb-8">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link to="/contact">
            <button className="border border-green-900 px-8 py-4 uppercase tracking-wide hover:bg-green-900 hover:text-white transition-all duration-300">
            Connect With Me →
            </button>
            </Link>
          </motion.div>

        </div>
      </section>

  );
}
