export default function Subscribe() {
  return (
    <section className="bg-[#8B8D56] py-24 px-6 md:px-12">
      {/* Decorative Outer Border Box */}
      <div className="max-w-6xl mx-auto border border-white/100 px-6 py-20 md:py-28 flex flex-col items-center text-center text-white">
        
        <h2 className="text-5xl md:text-6xl font-normal tracking-tight mb-6">
          Subscribe
        </h2>
        
        <p className="text-lg font-light mb-12 max-w-lg">
          Sign up with your email address to receive news and updates.
        </p>

        {/* Form Container */}
        <form 
          className="w-full max-w-xl flex flex-col md:flex-row gap-4 items-stretch"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="Email Address" 
            className="flex-grow bg-white text-black p-4 outline-none placeholder:text-gray-400 font-light"
          />
          
          <button 
            type="submit" 
            className="bg-transparent border border-white/60 px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-[#8B8D56] transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-12 text-sm font-light italic opacity-80">
          We respect your privacy.
        </p>
        
      </div>
    </section>
  );
}