import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes'; // Import your item types from wherever it's defined

const Card = ({ id, name, index, moveCard }) => {
    const [clickCount, setClickCount] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const [, drag, preview] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => {
            setIsDragging(monitor.isDragging());
        },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Call the moveCard function which should be provided by the parent component
            moveCard(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally, it's better to avoid mutations,
            // but it's good here for the sake of performance to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    let ref = React.useRef();
    const combinedRef = (node) => {
        // Use the node for both the drag and drop refs
        drag(node);
        drop(node);
        ref.current = node;  // Save a reference to the node
    };

    preview(drop(ref));

    // Dragging style
    let draggingStyle = isDragging ? 'opacity-50' : 'opacity-100';

    // Click-based style
    let clickStyle;
    switch (clickCount % 3) { // Use modulo for cycling through the clicks
        case 0:
            clickStyle = 'w-[40%] bg-[#333]'; // Default state
            break;
        case 1:
            clickStyle = 'w-[100%] bg-[#2ab57c]'; // First click state
            break;
        case 2:
            clickStyle = 'w-[40%]  bg-[#2ab57c]'; // Second click state
            break;
        default:
            clickStyle = 'w-[40%]  bg-[#333]'; // Fallback state (should not be reached)
    }

    const toggleCardState = () => {
        setClickCount(prevClickCount => prevClickCount + 1);
    };

    return (
        <div ref={combinedRef} onClick={toggleCardState} className={`border min-w-[49%] border-[#2ab57c] rounded-lg transition-all duration-300 ease-in-out ${clickStyle} ${draggingStyle} cursor-pointer `}>
            <p className="text-white text-md md:text-lg px-4 py-2 w-[150px]">
                {name}
            </p>
        </div>
    );
};

export default Card;
