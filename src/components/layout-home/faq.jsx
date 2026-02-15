import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider, but I can provide superbills for reimbursement.",
  },
  {
    question: "What are your rates?",
    answer:
      "Individual sessions are $150 per 50-minute session.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Please contact me directly to inquire about current availability.",
  },
];

export default function faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#ffffff] py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start px-6 md:px-0">
          <div className="w-[280px] sm:w-[350px] md:w-[450px] h-[400px] md:h-[650px] overflow-hidden rounded-t-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
              alt="Decorative plant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div className="px-6 sm:px-10 md:px-0 text-[#2d422f]">

          <h2 className="text-4xl md:text-5xl font-semibold mb-12">
            FAQs
          </h2>

          <div className="space-y-6">

            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-[#2d422f]/40 pt-6">

                {/* Question Row */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left text-xl md:text-2xl font-medium"
                >
                  <span>{faq.question}</span>

                  <span className="text-3xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Animation */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

            {/* Bottom Border */}
            <div className="border-t border-[#2d422f]/40"></div>

          </div>
        </div>

      </div>
    </section>
  );
}
