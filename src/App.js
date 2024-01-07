import { useState } from 'react';
import './App.css';
import { data } from './data';
import Hotels from './hotels';

function App() {
  const [toVisit, setToVisit] = useState(data);
  const removeItem = (id) => {
    let newToVisit = toVisit.filter(toVisit => toVisit.id !== id);
    setToVisit(newToVisit)
  }
  
  const [showMore, setShowMore] = useState(false);

  return (
    <div>

      <div className="container">
        <h1>{toVisit.length} places you must see in Rome:</h1>
      </div>

      <div>
        {toVisit.map((thing => {
          const{id, toVisitData, image, description} = thing;
          return (
            <div key={id}>

              <div  className="container" >
                <h2>{id}. {toVisitData}</h2>
              </div>

              <div className="container">
                <img src={image} width="1000px" alt="Place to visit"/>
              </div>

              <div className="container" >
                <p>{showMore ? description : description.substring (0, 230) + "..."} <button className="show" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
              </div>

              <div className="container">
                <button className='btn' onClick={() => removeItem(id)}>Delete</button>
              </div>

            </div>
        )
      }))}

        <div className="container" >
          <button className='btn all' onClick={() => setToVisit([])}>Delete all</button>
        </div>

      </div>
      < Hotels />
    </div>
  );
}

export default App;
