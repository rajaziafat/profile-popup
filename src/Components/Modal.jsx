import React from 'react';

function Modal({ children, closeModal, onSave }) {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800  bg-opacity-75 flex justify-center items-center px-4">

            <div className="bg-[#333] bg-opacity-20 rounded-lg pb-6  max-w-[1200px]">

                <div className='bg-[#333] p-8 text-white   '>

                    <p className='text-center text-2xl font-medium'>Profile Layout Setup</p>
                </div>

                <div className="mt-4 px-2">
                    {children}
                </div>

                <div className="mt-4 flex justify-center gap-3">
                    <button onClick={onSave} className=" flex items-center space-x-2 px-6 py-3 bg-[#333] text-white font-bold rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>

                        <p>   Save</p>
                    </button>
                    <button onClick={closeModal} className=" flex items-center space-x-2 px-6 py-3 bg-[#333] text-white font-bold rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>


                        <p>   Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
