import { useState } from 'react';
import { data } from '../../data';

const Options = ({ onVote }) =>  {

    // Function to shuffle array elements (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Shuffle the quotes array and get two random quotes
    const shuffledQuotes = shuffleArray([...data]);
    const randomQuote1 = shuffledQuotes[0];
    const randomQuote2 = shuffledQuotes[1];

    // Function to handle vote for the selected quote
    const handleVote = (quoteID) => {
        // Call the onVote callback with the selected quote ID
        onVote(quoteID);
    };

    return (
        <>
            <div className="flex flex-col">
                
                {/* Display the first random quote card */}
                <div
                className="p-8 border border-gray-200 rounded-md cursor-pointer"
                onClick={() => handleVote(randomQuote1.quoteID)}
                >
                    <p>{randomQuote1.quoteName}</p>
                </div>

                {/* Separator line */}
                <div className="p-4 flex items-center justify-center">
                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                    <div className="mx-4 text-gray-400">or</div>
                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                </div>
                
                {/* Display the second random quote card */}
                <div
                className="p-8 border border-gray-200 rounded-md cursor-pointer"
                onClick={() => handleVote(randomQuote2.quoteID)}
                >
                    <p>{randomQuote2.quoteName}</p>
                </div>

            </div>

        </>
    );

}

export default Options;