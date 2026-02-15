    import SectionWrapper from "./SectionWrapper";

export default function Appointment() {
  return (
    <>
        <div className="bg-[#ded8cf]">
            <div className="max-w-4xl mx-auto text-center">
        
        <SectionWrapper className="bg-[#ded8cf] py-24 px-10">
        <h2 className="text-5xl text-green-900 font-semibold mb-6">
          Book an appointment.
        </h2>

        <p className="text-green-900 text-lg max-w-2xl mx-auto">
          Add some text here if you like, and add your scheduling widget below.
        </p>
        </SectionWrapper>
        <SectionWrapper className="bg-[#ded8cf] py-18 px-10">
        <div className="bg-white p-12 mt-12 shadow-sm">
          <p className="text-xl text-black font-medium mb-4">This page is not active</p>
          <button className="bg-black text-white px-6 py-3 mt-4">
            GO TO ACCOUNT
          </button>
        </div>
        </SectionWrapper>
      </div>    
            </div>
    
      
    
    </>
    
  );
}
