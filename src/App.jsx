import React, { useEffect, useState } from 'react';
import Search from './components/search'

const API_BASE_URL = 'https:/www.movieflix.com'

const API_Key = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {

    const [searchTerm, setSearchTerm] = useState(' ');

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