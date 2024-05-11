import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-gray-300">Created by: Leonid Shamarin</p>
        <div className="text-gray-300">
          <p>Tech Stack: React.js, TypeScript, Axios, GraphQL, Tailwind CSS</p>
          <p>
            API: 
            <a
              href="https://rickandmortyapi.com/documentation/"
              className="ml-2 text-blue-400 hover:text-blue-500"
            >
              Rick and Morty API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
