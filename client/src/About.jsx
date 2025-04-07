import React from 'react';
import Header from './components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 px-4 py-8 md:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Discover Your City with Journey Jotter</h2>
          <p className="mt-4 text-gray-600">
            Journey Jotter is your ultimate travel companion. We help you plan your travels efficiently with personalized itineraries, budget management, and recommendations. Whether you're seeking adventure or relaxation, we ensure your journey is unforgettable.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white mt-20">
        <div className="container mx-auto px-4 py-8">
          {/* About Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img
              src="\IMAGES\istockphoto-508628776-612x612.webp"
              alt="Beautiful tour location"
              className="w-full lg:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">About Us</h3>
              <p className="mt-4 text-gray-600">
                Journey Jotter transforms your everyday surroundings into an exciting adventure. Whether you're a lifelong resident or new to the area, our platform helps you uncover the hidden gems and unique experiences that make your city truly special. Rediscover the joy of urban exploration with Journey Jotter. From quaint cafes and historic landmarks to vibrant street art and scenic parks, let us guide you on a journey through the heart of your city. Explore Journey Jotter today and start your adventure!
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <section className="team-section py-12 mt-36">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
    <p className="mt-2 text-gray-600">
      Our talented team works tirelessly to make your travel planning seamless and enjoyable.
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
    {[
     
  { name: 'Deepakshi', image: '/IMAGES/tl(9).webp' },
  { name: 'Anjali', image: '/IMAGES/tl(10).webp' },
  { name: 'Charu', image: 'IMAGES/tl(140).webp' },
  { name: 'Prity', image: '/IMAGES/tl(25).webp' },
  { name: 'Harshi', image: '/IMAGES/tl(11).webp' },



    ].map((member, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        <div className="relative w-24 h-24 overflow-hidden rounded-full mb-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-fit object-cover transform hover:scale-110 hover:translate-y-[-10px] transition-transform duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
      </div>
    ))}
  </div>
</section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">About Tour</h4>
            <p>
            From the Ghats of Varanasi to the Caves of Ellora – Explore India's Timeless Wonders.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-sky-400">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-sky-400">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-sky-400">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-sky-400">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Pages</h4>
            <ul>
              <li><a href="#" className="hover:text-sky-400">Blog</a></li>
              <li><a href="/About" className="hover:text-sky-400">About</a></li>
              <li><a href="/Contact" className="hover:text-sky-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <p><i className="fa fa-envelope"></i> guptacharu1207@gmail.com</p>
            <p><i className="fa fa-phone"></i>+91 7351709348</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default About;
