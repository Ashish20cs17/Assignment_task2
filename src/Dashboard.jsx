import React, { useState } from 'react';
import './App.css';
import tripImage from './tokyo-trip.png';
import flightBg from './image.png';
import hotelBg from './hotel.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image4 from './image4.png';
import image5 from './image5.png';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleBackground = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
  };

  return (
    <div className={`app ${darkMode ? '' : 'light'}`}>
      {/* Toggle Button */}
      <button className="theme-toggle" onClick={toggleBackground}>C</button>

      <div className="top-left">
        <h2>Hello Chhavi</h2>
        <h3>Ready for the trip</h3>
        <h4>Your Upcoming Trip</h4>
      </div>

      {/* Trip Overview */}
      <section className="trip-card">
        <img src={tripImage} alt="Tokyo Trip" className="trip-bg-image" />
        <div className="trip-overlay">
          <h1>TOKYO</h1>
          <p>27.01.2025 - 02.02.2025</p>
          <div className="trip-details">
            <span>🕒 8 Days</span>
            <span>👥 4 (2M, 2F)</span>
            <span>📅 14 Activities</span>
          </div>
        </div>
      </section>

      {/* Flight Section */}
      <section
        className="flight-card"
        style={{
          backgroundImage: `url(${flightBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flight-info">
          <h4>Flight Details</h4>
          <p>26.01.2025, 10:50 am</p>
          <p>DEL (Delhi, India) ➝ NRT (Narita, Tokyo)</p>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation">
        <h4>Accommodation</h4>
        <div className="hotel-row">
          <div
            className="hotel-card confirmed"
            style={{
              backgroundImage: `url(${hotelBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h5>Shinagawa Prince Hotel</h5>
            <p>Check-in: 26.01.2025, 11:15 pm</p>
            <p>Check-out: 28.01.2025, 11:15 am</p>
            <span className="status confirmed">Confirmed</span>
          </div>

          <div className="hotel-card pending">
            <img src={image4} alt="Mercure Tokyo Hotel" />
            <h5>Mercure Tokyo Hotel</h5>
            <p>Check-in: 28.01.2025, 6:00 pm</p>
            <p>Check-out: 30.01.2025, 11:15 am</p>
            <span className="status pending">Pending</span>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <div className="day-plan">
          <button className="active">Day 1 - 27.01.2025</button>
          <span>3 Activities</span>
        </div>

        {/* Activity 1 */}
        <div className="activity-card">
          <img src={image1} alt="Senso-ji Temple & Nakamise" />
          <div>
            <h5>Senso-ji Temple & Nakamise Shopping</h5>
            <p>Timing: 8:15 am Morning</p>
            <p>Duration: 3 hours</p>
            <p>Pick up: From Hotel</p>
          </div>
        </div>

        {/* Activity 2 */}
        <div
          className="activity-card"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="overlay">
            <h5>Tokyo Sky Tree</h5>
            <p>Timing: 1:00 pm Afternoon</p>
            <p>Duration: 3 hours</p>
            <p>Pick up: From Nakamise Street</p>
          </div>
        </div>

        {/* Activity 3 */}
        <div className="activity-card">
          <img src={image5} alt="Kimono Wearing" />
          <div>
            <h5>Kimono Wearing</h5>
            <p>Timing: Anytime before 8:00 pm</p>
            <p>Duration: 1–2 hours</p>
            <p>Pick up: From Hotel</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
