import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
   const [showNav, setShowNav] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
       transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full top-0 z-50 flex justify-between items-center px-10 py-6 bg-transparent"
    >
      <h1 className="text-4xl font-bold tracking-wide"><Link className="text-black hover:text-gray-600" to="/">LILAC</Link></h1>

      <ul className="flex gap-10 text-xl">
  <Link className="text-black hover:text-gray-600" to="/blog">
    Blog
  </Link>
  <Link className="text-black hover:text-gray-600" to="/contact">
    Contact
  </Link>
</ul>
    </motion.nav>
  );
};

export default Navbar;
