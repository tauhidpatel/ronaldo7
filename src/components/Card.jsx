import { useEffect, useState } from 'react';
import ronaldoImage from '../assets/ronaldo.png';
import supabase from '../config/supabaseClient';

const Card = () => {

    const [ fetchError, setFetchError ] = useState(null);
    const [ quotes, setQuotes ] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const { data, error } = await supabase
                    .from('quotes')
                    .select('*', { order: { 'vote_Count': 'desc' } });

                if (error) {
                    setFetchError('Cannot fetch quotes');
                    console.error(error);
                }

                if (data) {
                    // console.log(data);
                    setQuotes(data);
                    setFetchError(null);
                }
            } catch (error) {
                console.error('Error fetching quotes:', error.message);
                setFetchError('Error fetching quotes');
            }
        };

        fetchQuotes();
    }, []);

    return (
        <div>
            {fetchError && <p>Error: {fetchError}</p>}
            {quotes.map((quote, index) => (
                <div key={quote.quote_ID} className='border-b border-gray-300 py-4'>
                    <div className="flex items-center">
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <img className='h-10' src={ronaldoImage} alt="ronaldo" />
                            <p className='text-sm text-gray-500'>#{index + 1}</p>
                        </div>
                        <div className='ml-4'>
                            <p className='text-base'>{quote.quote_Name}</p>
                        </div>
                        <div className='ml-auto flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-red-500'>
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                            </svg>
                            <p className='ml-1 text-base font-medium'>{quote.vote_Count}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;