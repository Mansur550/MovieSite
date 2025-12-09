import React, { useState } from 'react';
import Search from './components/search'



const App = () => {

    const [searchTerm, setSearchTerm] = useState('The Dark Knight');

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