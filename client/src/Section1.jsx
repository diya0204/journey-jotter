const Section1 = () => {
  return (
    <div className="relative w-full max-w-full mx-auto mb-8 flex flex-col h-full  bg-gradient-to-br">
      {/* Background Image */}
      <div className="relative h-90 md:h-96 overflow-hidden">
        <img
          src="\IMAGES\annie-spratt-KovxPeamVts-unsplash.jpg"
          alt="City View"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="absolute top-10 left-10 bg-white p-6 rounded-lg shadow-lg max-w-xs">
        
        <p className="text-gray-600 mt-2">
        <span className="text-2xl font-semibold text-gray-900">
          " 
        </span>
          The road stretches far, the skies so wide,
        A map in my hand, the world as my guide.
        Footsteps echo on lands unknown,
        In every journey, a seed is sown.  
        <span className="text-2xl font-semibold text-gray-900">
          "
        </span>
        </p>
       
        
      </div>
    </div>
  );
};

export default Section1;
