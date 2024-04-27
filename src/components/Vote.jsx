import { useState } from "react";
import Card from "./Card";
import Options from "./Options";

export default function Vote() {

    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
            <div className="fixed top-5 right-5 text-center">
                <button 
                    className="flex items-center gap-1 px-6 py-4 text-2xl uppercase font-semibold border-none text-red-500 bg-red-200 hover:bg-red-300 rounded-md"
                    onClick={() => setShowModal(true)}   
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-red-500'>
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
                <span>Vote</span>
                </button>

                <p className="text-lg mt-1">
                    <span className="font-semibold mr-1">5</span> 
                    votes left
                </p>
            </div>
            
            <div>
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">What is your favourite CR7 quote ?</h3>
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-200 py-0 rounded-md">
                            x
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <Options />
                      </div>
                    </div>
                  </div>
                </div>
            ) : null}
            </div>
        </>
    );
}