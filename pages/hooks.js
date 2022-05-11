import { useState } from 'react';

export default function Hooks() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Hooks</h1>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
}

// Hook usePage
function usePage(initialPage, lastPage) {
  const [page, setPage] = useState(initialPage);

  const previousDisabled = page === 0;
  const nextDisabled = page === lastPage;

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return { page, nextPage, previousPage, previousDisabled, nextDisabled };
}


function usePage (initialPage, lastPage){

    
}


//Page und Counter Hook

function useCounter(initialCounter, maxCounter){
    const [counter, setCounter] = useState(initialCounter);

    function increment(){setCounter(counter + 1)}

    function decrement(){setCounter(counter - 1)};
    return {counter, increment, decrement}
}

export default function Hooks() {
  
    const {counter, increment, decrement} = useCounter(100)

    return(
        <>
        <h1>Hooks</h1>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
        </>
    )
}