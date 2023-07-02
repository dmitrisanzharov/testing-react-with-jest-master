import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)


    function makeIncrementer (amount) {
      setCount(count + amount)
    }

    function incrementFunction(){
      makeIncrementer(1);
    }

    function decrementFunction(){
      makeIncrementer(-1)
    }



  return (
    <div>
        <h1>counter</h1>
        <h2>the count is: {count}</h2>
        <button onClick={incrementFunction} id='button1'>Increase</button>
        <button onClick={decrementFunction} id='button2'>Decrease</button>
    </div>
  )
}

export default Counter