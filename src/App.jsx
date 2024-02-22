import { useState } from 'react';
import Card from './Components/Card';
import Modal from './Components/Modal'; // Assuming you have a Modal component
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import update from 'immutability-helper';


// Function to detect touch devices
const isTouchDevice = () => {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

// Your App component
function App() {
  const [cards, setCards] = useState([
    { id: 1, name: 'Galamour', },
    { id: 2, name: 'Galamour2', },
    { id: 3, name: 'Galamour3', },
    { id: 4, name: 'Galamour4', },
    { id: 5, name: 'Galamour5', },
    { id: 6, name: 'Galamour6', },
    { id: 7, name: 'Galamour7', },
    { id: 8, name: 'Galamou8', },



  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      })
    );
  };

  const handleSave = () => {
    // Handle save functionality here
    console.log('Saving...');
    setIsModalOpen(false);
  };

  // Choose backend based on device
  const backend = isTouchDevice() ? TouchBackend : HTML5Backend;

  return (
    <div className='flex justify-center items-center h-screen '>
      <button onClick={() => setIsModalOpen(true)} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>


      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} onSave={handleSave}>
          <DndProvider backend={backend}>
            <div className=" gap-2 flex flex-wrap   h-auto ">
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  img={card.img}
                  description={card.description}
                  index={index}
                  moveCard={moveCard}
                />
              ))}
            </div>
          </DndProvider>
        </Modal>
      )
      }

    </div >
  );
}

export default App;
