import './day-counter.css';

const DayCounter = () => {

    let counter = 97;

    return ( 
        <div>
            <h1>{counter}</h1>
            <h3>Day's since last drink!</h3>
        </div>
     );
}
 
export default DayCounter;