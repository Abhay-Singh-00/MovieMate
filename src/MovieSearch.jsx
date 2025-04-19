import React from 'react';

const MovieModal = ({ movie, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-all duration-300 ease-in-out"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-3xl shadow-xl p-6 max-w-sm sm:max-w-lg w-full mx-4 sm:mx-0 transform transition-all duration-500 ease-in-out scale-95 hover:scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <div className="relative">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">{movie.Title}</h2>
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className="w-full h-64 sm:h-80 object-cover mb-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                    />
                    <p className="text-gray-500 text-center mb-4">{movie.Year}</p>
                    <p className="text-gray-700 text-lg text-justify">{movie.Plot}</p>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={closeModal}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:scale-105"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
