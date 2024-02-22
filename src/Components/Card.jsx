import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes'; // Import your item types
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Card = ({ id, name, description, index, moveCard, img }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id, index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item) {
            if (!drag) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const opacity = isDragging ? 0.5 : 1;

    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };

    const [isGrid1, setIsGrid1] = useState(true);

    const toggleGrid = () => {
        setIsGrid1(!isGrid1);
    };

    return (
        <div ref={node => drag(drop(node))} style={{ opacity }} className={` ${!isGrid1 ? 'w-full bg-blue-200' : 'w-[250px]'}`}>
            <div>
                <div className='bg-[#333] backdrop-blur-md border border-[#333] bg-opacity-25 flex gap-2 justify-between items-center md:gap-4 px-2 py-4  cursor-pointer'>
                    <div className='flex  items-center space-x-1 md:space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4  md:w-6 md:h-6 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                        {isOpen ? (
                            <>
                                <div onClick={toggleIcon}>
                                    <FaRegEyeSlash className='w-4 h-4  md:w-6 md:h-6 text-white cursor-pointer' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div onClick={toggleIcon}>
                                    <IoEyeOutline className='w-4 h-4  md:w-6 md:h-6 text-white cursor-pointer' />
                                </div>
                            </>
                        )}
                    </div>
                    <div>
                        <p className='text-white text-xs md:text-[16px]'>{name}</p>
                    </div>
                    <div className='flex justify-end min-w-4  md:min-w-[32px]'>
                        <div className="cursor-pointer" onClick={toggleGrid}>
                            <p className="text-white text-xs md:text-lg font-bold">{isGrid1 ? '1²' : '1'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
