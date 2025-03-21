import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_2fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Part */}
        <div>
          <img className="mb-5 w-25" src="https://www.library-management.com/uploads/60196c0c6f3a8_logo_.png" alt="Library Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Welcome to <strong>Library Management System</strong> – a smart and efficient way to manage books, track borrowing records, and provide seamless access to knowledge.
          </p>
        </div>
        {/* Center Part */}
        <div>
          <p className="text-xl font-medium mb-5">LIBRARY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Catalog</li>
            <li>Library Rules</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Right Part */}
        <div>
          <p className="text-xl font-medium mb-5">CONTACT</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>📍 Location: [Library Address]</li>
            <li>📞 Phone: +91 XXXXXXXXXX</li>
            <li>📧 Email: support@library.com</li>
            <li>⏰ Timings: Mon-Fri (9 AM - 7 PM), Sat-Sun (10 AM - 5 PM)</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-3 text-sm text-center font-semibold">Copyright 2025 Library Management System. All rights reserved.</p>
        <p className="text-sm text-center mb-3 font-medium">📚 Empowering Knowledge, One Book at a Time! 📖</p>
      </div>
    </div>
  );
};

export default Footer;