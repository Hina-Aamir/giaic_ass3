import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyBrand</h2>
        <p className="text-lg text-gray-700">
          We create amazing solutions for our clients.
        </p>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">About Us</h3>
        <p className="max-w-xl mx-auto text-gray-700">
          MyBrand is a team of talented professionals with a passion for design and innovation. We believe in delivering exceptional experiences.
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Our Portfolio</h3>
        <p className="max-w-xl mx-auto text-gray-700">
          Discover some of our most recent projects and the solutions we've provided for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-white p-4 shadow rounded">Project 1</div>
          <div className="bg-white p-4 shadow rounded">Project 2</div>
          <div className="bg-white p-4 shadow rounded">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="max-w-xl mx-auto text-gray-700">
          Have a project in mind? Reach out to us, and let's create something amazing together.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
