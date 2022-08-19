import DayCounter from "./day-counter";
import CallSupport from "./call-support";
import Alert from "./alert";
import Quotes from "./quotes";
import './main.css'

const Main = () => {

    return (
    <main>
        <DayCounter />
        <Quotes />
        <Alert />
        <CallSupport />
    </main>
    )
}

export default Main;