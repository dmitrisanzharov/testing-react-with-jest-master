import React from 'react';
import Counter from './Counter';

const ManyCounters = () => {

    const [count, setCount] = React.useState(2);
    const [data, setData] = React.useState([0,1]);

    function addCounter(){
        setCount(count+1)
    }

    function arrayMaker(){
        let final = Array.from({length: count}, (_, idx) => idx);
        console.log("final: ", final);
        setData(final)
    }

    React.useEffect(() => {


        if(count === 2){
            return
        }

        arrayMaker();


    }, [count]);

  return (
    <div>
        <h1>ManyCounters</h1>
        <button onClick={addCounter} id='addMore'>add counter</button>
        <hr />
        {data.map(el=> {
            return <Counter key={el}/>
        })}
    </div>
  )
}

export default ManyCounters