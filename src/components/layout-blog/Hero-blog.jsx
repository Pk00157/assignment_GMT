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
              src={"https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/03adb210-386b-4cac-93ce-796727896c60/pexels-alp-y%C4%B1ld%C4%B1zlar-15127478.jpg?format=2500w"}
              alt="Flowers"
              className="w-[475 px] h-[700px] object-cover rounded-t-full"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-green-900"
          >
            <h1 className="text-7xl font-semibold leading-tight mb-6">
              The Lilac Blog
            </h1>

            <p className="text-2xl mb-8">
              My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
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
