import React from 'react'

const Counter = () => {

    const [count, setCount] = React.useState(0)


  return (
    <div>
        <h1>counter</h1>
        <h2>the count is: {count}</h2>
        <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Counter