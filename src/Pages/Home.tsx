import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import OnlineConsultation from "../Components/OnlineConsultation";

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <OnlineConsultation />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
};

export default Home;