import { useState } from "react";
import Options from "./Options";

export default function Vote({ setVotes }) {

    const [ showModal, setShowModal ] = useState(false);

    // Function to handle vote for a quote
    const handleVote = (quoteID) => {
      // Perform actions to record the vote (e.g., update backend, store vote data, etc.)
      console.log(`Voted for quote with ID: ${quoteID}`);
      
      // Update the votes object with the new vote
      setVotes((prevVotes) => ({
        ...prevVotes,
        [quoteID]: (prevVotes[quoteID] || 0) + 1
      }));

      // Close the modal
      setShowModal(false);
    };

      return (
        <>
            {/* Toggle button to open the modal */}
            <div className="fixed top-5 right-5 text-center">
                <button 
                    className="flex items-center gap-1 px-6 py-4 text-2xl uppercase font-semibold border-none text-red-500 bg-red-200 hover:bg-red-300 rounded-md"
                    onClick={() => setShowModal(true)}   
                >
                    <span>Vote</span>
                </button>
                <p className="text-lg mt-1">
                    <span className="font-semibold mr-1">5</span> votes left
                </p>
            </div>

            {/* Modal to display options for voting */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 className="text-3xl font-semibold">What is your favourite CR7 quote?</h3>
                            </div>
                            <div className="relative p-6 flex-auto">
                                {/* Pass the handleVote function as a prop to Options */}
                                <Options onVote={handleVote} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}