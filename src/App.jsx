import React, { useEffect, useState } from 'react';
import Search from './components/search'

const API_BASE_URL = 'https:/www.movieflix.com'

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


    const fetchMovies = async () => {
        try {

        } catch (error) {
            console.error(`Error fetching Movie`);
            setErrorMessage('Error fetching movies. Please try again later.');
        }
    }




    useEffect(() => {

    }, []);

    return (
        <><div className='pattern'>
            <h1></h1>
        </div>
            <div className='wrapper'>
                <header>
                    <img src='./hero.png' alt="Super Hero movie Banner" />
                    <h1>Find Movies You Will Enjoy Without the Hassle</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />   {/*pass 2 props */}

            </div></>
    )
}

export default App