import React from 'react';

const FavouriteMovie = ({ movie, removeFavourites, showModal }) => {
    const handleRemove = (e) => {
        e.stopPropagation();
        removeFavourites(movie);
    };

    const handleShowModal = () => {
        showModal(movie);
    };

    return (
        <li
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-auto md:h-96"
            onClick={handleShowModal}
        >
            <img
                className="w-full h-48 md:h-64 object-cover"
                src={movie.Poster}
                alt={movie.Title}
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800 truncate">{movie.Title}</h4>
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
};

const MovieModal = ({ movie, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-lg p-4 max-w-md w-full mx-4 sm:mx-0"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{movie.Title}</h2>
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-64 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-600 mb-4">{movie.Year}</p>
                <p className="text-gray-700 mb-4">{movie.Plot}</p>
                <button
                    onClick={closeModal}
                    className="bg-red-500 text-white py-2 px-4 rounded-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const MovieSearch = (props) => {
    const [movieSearch, setMovieSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!movieSearch.trim()) {
            setError('Please enter a movie name');
            return;
        }

        setError('');
        setLoading(true);
        try {
            const url = `https://www.omdbapi.com/?apikey=72be683&t=${movieSearch}`;
            const res = await fetch(url);
            const data = await res.json();

            if (data.Response === 'False') {
                setError('Movie not found');
            } else {
                props.addFavourites(data);
            }
        } catch (error) {
            setError('Failed to fetch data');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const showModal = (movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <>
            {selectedMovie && <MovieModal movie={selectedMovie} closeModal={closeModal} />}
            <form
                className="flex flex-col items-center justify-center mt-10 mb-10 space-y-4 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-xl w-11/12 max-w-md mx-auto"
                onSubmit={handleSearch}
            >
                <label htmlFor="search" className="text-white text-2xl font-semibold">
                    🎬 Search Your Favourite Movie
                </label>
                <input
                    type="text"
                    name="search"
                    value={movieSearch}
                    onChange={(e) => setMovieSearch(e.target.value)}
                    placeholder="Enter movie name..."
                    className="w-full px-4 py-2 rounded-md border-2 border-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md"
                />
                {error && <p className="text-red-500 text-lg">{error}</p>}
                <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:scale-105"
                    disabled={loading}
                >
                    {loading ? '🔄 Searching...' : '🔍 Search'}
                </button>
            </form>
        </>
    );
};

export default MovieSearch;
