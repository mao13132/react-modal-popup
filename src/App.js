import './App.css';

import { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

function App() {


  const [open, setOpen] = useState(false);

  const clickOpen = () => {
    setOpen(true);
  };

  const clickClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <button onClick={clickOpen} className='open-modal-btn'>Открыть окно</button>


      <CSSTransition in={open} timeout={500} classNames='animated' unmountOnExit>
        <div className="overlay">
          <div className="modal">
            <img onClick={clickClose} className='plus' src="./plus.svg" alt="закрыть" />
            <img className='content' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGQ5MGpwMHU3dzR6OHIyN2ZpbWxqdWg3amk1dm85MmEzNjJ0M2lndiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2zZNmrvguyPTS06rK0/200.gif" alt="содерэание" />
          </div>
        </div>
      </CSSTransition>


    </div>
  );
}

export default App;
