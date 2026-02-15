import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-[#1F3A2E]">

      {/* MAIN FOOTER */}
      <div
        className="
          
          px-8 md:px-20
          py-28
          grid
          grid-cols-1
          md:grid-cols-[2.5fr_1fr_1fr]
          gap-20 md:gap-28
        "
      >

        {/* LEFT (WIDER COLUMN) */}
        <div> 
          <h2 className="text-[48px] font-bold mb-12 tracking-wide">
            Lilac Template
          </h2>

          <div className="space-y-8 text-[17px] text-[#2E3F35]">
            <p>
              123 Example Road <br />
              Minneapolis, MN
            </p>

            <div className="space-y-4">
              <p className="underline underline-offset-4 hover:opacity-60 transition cursor-pointer">
                email@example.com
              </p>
              <p className="underline underline-offset-4 hover:opacity-60 transition cursor-pointer">
                (555) 555-5555
              </p>
            </div>
          </div>
        </div>

        {/* HOURS */}
        <div>
          <h2 className="text-[48px] font-medium mb-12 tracking-wide">
            Hours
          </h2>

          <p className="text-[17px] text-[#2E3F35] leading-8">
            Monday – Friday <br />
            10am – 6pm
          </p>
        </div>

        {/* FIND */}
        <div>
          <h2 className="text-[48px] font-medium mb-12 tracking-wide">
            Find
          </h2>

          <div className="flex flex-col gap-5 text-[17px]">
            <Link to="/" className="underline underline-offset-4 hover:opacity-60 transition">
              Home
            </Link>
            <Link to="/contact" className="underline underline-offset-4 hover:opacity-60 transition">
              Contact
            </Link>
            <Link to="/blog" className="underline underline-offset-4 hover:opacity-60 transition">
              Blog
            </Link>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#C8C2BA]" />

      {/* BOTTOM SECTION */}
      <div className="bg-[#CFC8C0] text-center px-6 py-16">

        <div className="flex flex-wrap justify-center gap-10 mb-10 text-[15px] underline underline-offset-4">
          <span>Privacy & Cookies Policy</span>
          <span>Good Faith Estimate</span>
          <span>Website Terms & Conditions</span>
          <span>Disclaimer</span>
        </div>

        <p className="mb-6 text-[15px]">
          Website Template Credits:{" "}
          <span className="underline underline-offset-4">
            Go Bloom Creative
          </span>
        </p>

        <p className="text-[15px]">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
