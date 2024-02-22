import React, { useState } from 'react';

const Card = ({ id, name }) => {
    const [clickCount, setClickCount] = useState(0);
    const [cardStyle, setCardStyle] = useState('min-w-[150px] md:w-[275px] bg-[#333]');

    const toggleCardState = () => {
        let newStyle;
        const newClickCount = (clickCount + 1) % 3; // Cycles through every 3 clicks
        setClickCount(newClickCount);

        switch (newClickCount) {
            case 0:
                // On 3rd click, revert to original bg color, keep expanded width
                newStyle = 'min-w-[150px] md:w-[275px] bg-[#333]';

                break;
            case 1:
                // On 1st click, change bg color and width
                newStyle = 'w-full bg-[#2ab57c]';
                break;
            case 2:
                // On 2nd click, revert to original width, keep changed bg color
                newStyle = 'min-w-[150px] md:w-[275px] bg-[#2ab57c]';
                break;
            case 3:
                // On 2nd click, revert to original width, keep changed bg color
                newStyle = 'min-w-[150px] md:w-[275px] bg-[#333]';
                break;
            default:
                // Default case (should not be reached)
                newStyle = ' min-w-[150px] md:w-[275px] bg-[#333]';
                break;
        }
        setCardStyle(newStyle);
    };

    return (
        <div
            onClick={toggleCardState}
            className={`${cardStyle} cursor-pointer border min-w-[150px] border-[#2ab57c] rounded-lg transition-all duration-300 ease-in-out`}
        >
            <p className="text-white text-md md:text-lg px-4 py-2">
                {name}
            </p>
        </div>
    );
};

export default Card;
