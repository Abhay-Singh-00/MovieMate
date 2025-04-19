import React, { useState } from 'react';

const MovieSearch = (props) => {
    const [movieSearch, setMovieSearch] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const url = `http://www.omdbapi.com/?apikey=72be683&t=${movieSearch}`;
            const res = await fetch(url);
            const data = await res.json();
            props.addFavourites(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            class="flex flex-col items-center justify-center mt-10 mb-10 space-y-4 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-xl w-11/12 max-w-md mx-auto"
            onSubmit={handleSearch}
        >
            <label for="search" class="text-white text-2xl font-semibold">
                🎬 Search Your Favourite Movie
            </label>
            <input
                type="text"
                name="search"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
                placeholder="Enter movie name..."
                class="w-full px-4 py-2 rounded-md border-2 border-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-md"
            />
            <button
                type="submit"
                class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-md hover:scale-105"
            >
                🔍 Search
            </button>
        </form>
    );
};

export default MovieSearch;
