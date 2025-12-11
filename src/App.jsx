import React, { useEffect, useState } from 'react';
import Search from './components/search'
import Spinner from "./components/spinner";


const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_Key = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/jason',
        Authorization: `Bearer ${API_Key}`
    }
}

const App = () => {

    const [searchTerm, setSearchTerm] = useState(' ');

    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovielist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

    }, []);



    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {

            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            alert(response);

            if (!response) {
                throw new Error("Failed to fetch movies");

            }

            const data = await response.json();
            console.log(data)

            if (data.Response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovielist([]);
                return;
            }

            setMovielist(data.results || []);


        } catch (error) {
            console.error(`Error fetching Movie`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(true);
        }
    }




    useEffect(() => {
        fetchMovies();

    }, []);

    return (
        <><div className='pattern'>
            <h1></h1>
        </div>
            <div className='wrapper'>
                <header>
                    <img src='./hero.png' alt="Super Hero movie Banner" />
                    <h1>Find Movies You Will Enjoy Without the Hassle</h1>


                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />   {/*pass 2 props */}

                </header>

                <section className='all-movies'>
                    <h2>All Movies</h2>

                    {isLoading ? (
                        <Spinner />
                    ) : errorMessage ? (
                        <p className='text-red-500'>{errorMessage}</p>
                    ) : (
                        <ul>
                            {
                                movieList.map((movie) => (
                                    <p key={movie.id} className='text-white'>{movie.title}</p>
                                ))
                            }
                        </ul>
                    )


                    }

                </section>


            </div></>
    )
}

export default App