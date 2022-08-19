import './day-counter.css';

const DayCounter = () => {

    let counter = 97;

    return ( 
        <div>
            <h3>{counter}</h3>
            <p>Day's since last drink!</p>
        </div>
     );
}
 
export default DayCounter;