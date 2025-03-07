import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with actual form submission logic, such as sending to an API
    alert('Message Sent!');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Have questions? We would love to hear from you! Please reach out to us using the form below.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
          {submitted && (
            <p className="mt-6 text-center text-green-500 font-semibold">
              Thank you for your message! We will get back to you soon.
            </p>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-200 py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Visit Us</h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Feel free to visit our beautiful hotel for a personal tour or to make a reservation.
        </p>

        <div className="text-center">
          <p className="text-xl mb-2">GrandPr0 Hotel</p>
          <p className="text-lg">123 Grand Ave, Luxury City</p>
          <p className="text-lg">Phone: +123 456 7890</p>
          <p className="text-lg">Email: contact@grandpr0hotel.com</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
