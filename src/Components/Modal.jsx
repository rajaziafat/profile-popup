import React from 'react';

function Modal({ children, closeModal, onSave, isGrid1, toggleGrid }) {
    return (
        <div className="fixed inset-0 z-50 bg-gray-800 md:flex items-center justify-center h-screen bg-opacity-75 px-4 py-4">

            <div className="bg-[#333] rounded-lg max-w-xl max-h-full overflow-y-auto pb-4 sm:w-full sm:max-w-md">

                <div className='bg-[#333] py-2 px-2 text-white flex justify-between'>
                    <p className='text-center text-lg md:text-2xl font-medium'>Profile Layout Setup</p>

                    <button onClick={closeModal} className="text-white font-bold rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>

                <div className="mt-4 px-2">
                    {React.Children.map(children, child =>
                        React.cloneElement(child, { isGrid1, toggleGrid })
                    )}
                </div>

                <div className="mt-4 flex justify-center gap-3">
                    <button onClick={onSave} className="flex items-center space-x-2 px-6 py-3 bg-[#2ab57c] text-white font-bold rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>

                        <p>Save</p>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Modal;
