import React from 'react';

const FavouriteMovie = ({ movie, removeFavourites, showModal }) => {
    const handleRemove = (e) => {
        e.stopPropagation();
        removeFavourites(movie);
    }

    const handleShowModal = () => {
        showModal(movie);
    }

    return (
        <li 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-auto md:h-96"
            onClick={handleShowModal}
        >
            <img 
                className="w-full h-48 md:h-64 object-cover" // Image height for small and larger screens
                src={movie.Poster} 
                alt={movie.Title} 
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800 truncate">{movie.Title}</h4>  {/* Added truncate for long titles */}
                <p className="text-gray-600">{movie.Year}</p>
                <button 
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full"
                    onClick={handleRemove}
                >
                    Remove
                </button>
            </div>
        </li>
    );
}

export default FavouriteMovie;
