import React from "react";

const Part = () => {
  return (
    <div className="flex items-center justify-between bg-blue-300 p-8 rounded-2xl shadow-lg max-w-8xl mx-auto h-100 mt-20">
      {/* Left Side - Text */}
      <div className="w-1/2 pr-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to the World of Knowledge
        </h2>
        <p className="mt-4 text-white">
          Discover a vast collection of books, research papers, and digital
          archives. Immerse yourself in stories, facts, and wisdom that
          transcend generations. Step into a library where every page turns into
          a journey.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2">
        <img
          src="https://thumbs.dreamstime.com/b/online-library-internet-education-concept-people-reading-books-online-library-internet-education-concept-cartoon-people-195953294.jpg"
          alt="Library"
          className="w-full h-90 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Part;