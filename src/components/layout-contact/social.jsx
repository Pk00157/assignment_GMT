import { useState } from 'react';

const SocialGallery = () => {
  // State to track which image is currently zoomed
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, url: 'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=500w' },
    { id: 2, url: 'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=500w' },
    { id: 3, url: 'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=500w' },
    { id: 4, url: 'https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=500w' },
  ];

  return (
    <div className="bg-[#f1ebe3] py-24 px-10 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-green-900 font-semibold mb-16">
          Find me on social.
        </h2>

        {/* Grid of Images */}
        <div className="grid md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImg(img.url)}
              className="h-80 bg-gray-300 cursor-zoom-in overflow-hidden transition duration-500 hover:scale-105"
            >
              <img 
                src={img.url} 
                alt="Social" 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Zoom Overlay (Modal) --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out p-4 md:p-20 transition-opacity duration-300"
          onClick={() => setSelectedImg(null)} // Click anywhere to close
        >
          {/* Close Button */}
          <button 
            className="absolute top-10 right-10 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300"
            onClick={() => setSelectedImg(null)}
          >
            &times;
          </button>

          {/* Zoomed Image */}
          <img 
            src={selectedImg} 
            alt="Zoomed" 
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300" 
          />
        </div>
      )}
    </div>
  );
};

export default SocialGallery;