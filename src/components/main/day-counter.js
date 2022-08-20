import './day-counter.css';

const DayCounter = () => {

    let counter = 197;

    return ( 
        <div>
            <h1 className='counterText'>{counter}</h1>
            <h3>Day's since last drink!</h3>
        </div>
     );
}
 
export default DayCounter;