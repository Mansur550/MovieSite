import React, { useEffect, useState } from 'react';
import Search from './components/search'

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

    useEffect(() => {

    }, []);



    const fetchMovies = async () => {
        try {

            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            alert(response);

            if (!response) {
                throw new Error("Failed to fetch movies");

            }
            const data = await response.json();


        } catch (error) {
            console.error(`Error fetching Movie`);
            setErrorMessage('Error fetching movies. Please try again later.');
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

                    {errorMessage && <p className='text-red-500'>{errorMessage}</p>}

                </section>


            </div></>
    )
}

export default App