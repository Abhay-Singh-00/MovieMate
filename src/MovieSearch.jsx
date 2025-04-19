import React, { useState } from 'react';

const MovieSearch = (props) => {
    const [movieSearch, setMovieSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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

    return (
        <form
            className="flex flex-col items-center justify-center mt-10 mb-10 space-y-6 bg-gradient-to-r from-indigo-500 to-purple-500 p-8 rounded-2xl shadow-lg w-full sm:max-w-md mx-auto"
            onSubmit={handleSearch}
        >
            <label htmlFor="search" className="text-white text-3xl font-bold text-center mb-4">
                🎬 Search Your Favourite Movie
            </label>
            <input
                type="text"
                name="search"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
                placeholder="Enter movie name..."
                className="w-full px-4 py-3 rounded-lg border-2 border-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md"
            />
            {error && <p className="text-red-500 text-lg">{error}</p>}
            <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:scale-105"
                disabled={loading}
            >
                {loading ? '🔄 Searching...' : '🔍 Search'}
            </button>
        </form>
    );
};

export default MovieSearch;
