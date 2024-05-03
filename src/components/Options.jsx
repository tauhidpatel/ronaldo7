import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

const Options = ({ onVote }) =>  {

    const [ randomQuotes, setRandomQuotes ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const fetchRandomQuotes = async () => {
            try {
                const { data, error } = await supabase
                    .from('quotes')
                    .select('quote_Name');
    
                if (error) {
                    throw error;
                }

                // Shuffle the array of quote names to get a random order
            const shuffledQuotes = data.map(quote => quote.quote_Name).sort(() => Math.random() - 0.5);
            
            // Select the first two quotes from the shuffled array
            const randomQuotes = shuffledQuotes.slice(0, 2);

            console.log('Random quotes:', randomQuotes);
            setRandomQuotes(randomQuotes);
            setLoading(false);
            setError(null);
            } catch (error) {
                console.error('Error fetching random quotes:', error.message);
                setLoading(false);
                setError('Error fetching random quotes');
            }
        };
    
        fetchRandomQuotes();
    }, []);

    const handleVote = (quoteID) => {
        onVote(quoteID);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className="flex flex-col">
                {/* Display the first random quote card */}
                <div
                    className="p-8 border border-gray-200 rounded-md cursor-pointer"
                    onClick={() => handleVote(randomQuotes[0])}
                >
                    <p>{randomQuotes[0]}</p>
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
                    onClick={() => handleVote(randomQuotes[1])}
                >
                    <p>{randomQuotes[1]}</p>
                </div>
            </div>
        </>
    );

}

export default Options;