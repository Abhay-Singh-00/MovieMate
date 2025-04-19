import Modal from 'react-modal';

const MovieModal = ({ isModalOpen, movie, modalClose }) => {
    if (!movie) return null;

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={modalClose}
            contentLabel={movie.Title}
            className="modal-container max-w-4xl sm:max-w-2xl mx-auto mt-12 sm:mt-16 p-6 bg-white rounded-3xl shadow-xl outline-none overflow-auto"
            overlayClassName="overlay-fixed fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
        >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {/* Movie Image */}
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full sm:w-64 h-auto sm:h-96 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
                />

                {/* Movie Details */}
                <div className="text-gray-800 space-y-4 text-lg flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-center sm:text-left">{movie.Title}</h2>
                        <p className="text-lg text-gray-600 text-center sm:text-left">📅 {movie.Year}</p>
                    </div>

                    <div>
                        <p><strong>🎭 Genre:</strong> {movie.Genre}</p>
                        <p><strong>⭐ Rating:</strong> {movie.imdbRating}</p>
                        <p><strong>⏱ Runtime:</strong> {movie.Runtime}</p>
                        <p><strong>🎬 Cast:</strong> {movie.Actors}</p>
                    </div>

                    <p className="pt-2"><strong>📝 Plot:</strong> {movie.Plot}</p>
                </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-center sm:justify-end w-full mt-4">
                <button
                    onClick={modalClose}
                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
                >
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default MovieModal;
