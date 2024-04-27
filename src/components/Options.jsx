import { data } from '../../data';

export default function Options() {

    // Function to shuffle array elements (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledQuotes = shuffleArray([...data]);

    const randomQuote1 = shuffledQuotes[0];
    const randomQuote2 = shuffledQuotes[1];

    return (
        <>
            <div className="flex flex-col">
                {/* First Card */}
                <div className="p-8 border border-gray-200 rounded-md">
                    <p>{randomQuote1.quoteName}</p>
                </div>

                {/* LINE */}
                <div className="p-4 flex items-center justify-center">
                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                    <div className="mx-4 text-gray-400">or</div>
                    <div className="flex-1 h-0.5 bg-gray-200"></div>
                </div>
                
                {/* Second Card */}
                <div className="p-8 border border-gray-200 rounded-md">
                    <p>{randomQuote2.quoteName}</p>
                </div>
            </div>
        </>
    );

}