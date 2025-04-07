/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const BHUCampus = ({ onBack }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2C3E50", fontSize: "3rem" }}>BHU Campus</h1><br />
      <img 
        src="https://iitbhu.ac.in/contents/iitbhu/img/slider/iit_bhu_slider_03.jpg" 
        alt="BHU Campus " 
        style={{ width: "100%", height: "500px", borderRadius: "10px", marginBottom: "20px" }} 
      />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📜 About BHU Campus</h2><br />
      <p>
        Banaras Hindu University is an internationally reputed temple of learning, situated in the holy city of Varanasi. This Creative and innovative university was founded by the great nationalist leader, Pandit Madan Mohan Malviya, in 1916 with cooperation of great personalities like Dr Annie Besant, who viewed it as the University of India. Banaras Hindu University was d under the Parliamentary legislation - B.H.U. Act 1915. It played a stellar role in the independence movement and has developed into the greatest center of learning in India. It has produced many great freedom fighters and builders of modern India and has immensely contributed to the progress of the nation through a large number of renowned scholars, artists, scientists and technologists who have graced its portals. The area of the main campus of this premiere Central University is 1300 acres, having well maintained roads, extensive greenery, a temple, an air strip and buildings which are an architectural delight. The Air Field of the campus was started for military training for flying during the second world war. Another campus of the university at Barkachha , in Mirzapur district, covering an area of 2700 acres is coming up.<br></br><br></br> The university comprises 6 Institutes, 14 Faculties 144 Departments, 4 Inter displinary Centers a constituent college for women and 3 Constituents Schools, spanning a vast range of subjects pertaining to all branches of humanities,social science,technology, medicine ,science, fine arts and performing arts. It has 6 centres of Advanced Studies, 10 Departments under Special Assistance Programme and a large number of specialized Research Centers. Four Degree Colleges of the city are affiliated to the University. Bharat Kala Bhavan, the reputed museum of the university, is a treasure trove of rare collections. The 927 bed hospital of the University is equipped with all the modern a menities. The university provides a wide range of facilities for sport and hobbies, has large playgrounds, a big auditorium, a flying club and many auxiliary services and units like Printing Press, Publication Cell,Fruit Preservation Center, Subsidized Canteens, Employment and Information Bureau, Security etc. The University family consists of about 15000 students belonging to all streams of life, castes and religions and races, about 1700 teachers, and nearly 8000 non-teaching staff A large number of students from foreign countries like the U.S.A, the countries of Europe, Asia, Middle East, Africa etc., come to study here. The university has taken a leadership role in promoting new ideas, the spirit of integration of the world, and cultivation of intellect and culture. Banaras Hindu University is small virtually a universe in microcosm.
      </p><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🌟 Highlights</h2><br />
      <ul style={{ textAlign: "left" }}>
        <li><strong>🏛️ New Vishwanath Temple:</strong> A grand Shiva temple located within the campus.</li>
        <li><strong>📚 Central Library:</strong> One of the largest university libraries in Asia.</li>
        <li><strong>🌳 Lush Greenery:</strong> A vast and serene campus ideal for long walks.</li>
        <li><strong>🎓 Academic Excellence:</strong> Home to thousands of students and researchers.</li>
      </ul><br />
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>📍 Location & Nearby Distances</h2><br />
      <p style={{ textAlign: "left" }}>
        <strong>📍 Address:</strong> BHU Campus, Varanasi, Uttar Pradesh, India
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🕒 Timings:</strong> Open all day (restricted access for non-students)  
      </p>
      <p style={{ textAlign: "left" }}>
        <strong>🎟️ Entry Fee:</strong> Free
      </p><br />
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3498DB", color: "white" }}>
            <th>From → To</th>
            <th>Distance (km)</th>
            <th>Walking Time</th>
            <th>Driving Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BHU Campus → Bharat Mata Mandir</td>
            <td>7 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>BHU Campus → Manikarnika Ghat</td>
            <td>8 km</td>
            <td>-</td>
            <td>25 min</td>
          </tr>
          <tr>
            <td>BHU Campus → New Vishwanath Temple</td>
            <td>1 km</td>
            <td>-</td>
            <td>5 min</td>
          </tr>
          <tr>
            <td>BHU Campus → Tulsi Manas Mandir</td>
            <td>3 km</td>
            <td>-</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>BHU Campus → BrijRama Palace</td>
            <td>7.5 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
          <tr>
            <td>BHU Campus → Taj Nadesar Palace</td>
            <td>10 km</td>
            <td>-</td>
            <td>30 min</td>
          </tr>
          <tr>
            <td>BHU Campus → Assi Ghat</td>
            <td>3 km</td>
            <td>35 min</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>BHU Campus → Dashashwamedh Ghat</td>
            <td>7 km</td>
            <td>-</td>
            <td>20 min</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ color: "#2980B9", fontSize: "2rem"}}>🗺️ Location on Map</h2><br />
      <iframe
        title="BHU Campus Banaras Map"
        width="100%"
        height="400"
        style={{ borderRadius: "10px", marginBottom: "20px" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.680801712345!2d83.03757917511636!3d25.2806932775345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c1f0e1f9fcd%3A0x5c9b5b36fbbf3e16!2sBHU%20Campus!5e0!3m2!1sen!2sin!4v1712807896543"
        allowFullScreen
      ></iframe>
      <button 
        onClick={onBack} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          display: "flex",
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginLeft: "10px",
          transition: "background-color 0.3s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0055aa"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#003366"}
      >
        Previous
      </button>
    </div>
  );
};

export default BHUCampus;
