import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  return (
    
      <div className="bg-[#c2bfcb] min-h-screen px-30 py-40  mx-auto ">
        <SectionWrapper className="">
        <h1 className="text-6xl md:text-7xl px-8 font-bold text-green-900 mb-12">
          Let’s Connect
        </h1>
        </SectionWrapper>
        
        

        <div className="grid md:grid-cols-2   gap-6 ">
          <div className="px-8">
            <p className="text-2xl text-green-900 mb-6">
              Starting therapy is courageous.
            </p>
            <p className="text-2xl text-green-900">
              Get in touch for questions, or to book a free 15-minute consultation.
            </p>
          </div>
          <SectionWrapper className="max-w-xl  mx-auto">
        <div className="bg-green-900 text-white p-8 rounded-sm">
            <p className="text-xl leading-relaxed">
              <span className="font-bold ">PLEASE NOTE:</span>  If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address
            </p>
          </div>
        </SectionWrapper>

          
        </div>
      </div>
   
  );
}
