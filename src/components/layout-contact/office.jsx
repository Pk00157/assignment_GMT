import SectionWrapper from "./SectionWrapper";
import Map from "../map";
export default function Office() {
  return (
    <>
    <div className="bg-[#8c8b4a] py-24 px-10">
      <SectionWrapper className="">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-white">
        
        <div>
          <h2 className="text-4xl font-bold mb-6">My Office</h2>
          <p>123 Example Street</p>
          <p>Minneapolis, MN</p>

          <h2 className="mt-8 text-4xl font-bold">Hours</h2>
          <p>Monday – Friday</p>
          <p>10am – 6pm</p>
        </div>

        <div className="bg-gray-200 w-full">
          <Map />
        </div>

      </div>
    </SectionWrapper>
    </div>
     
    </>
   
  );
}
