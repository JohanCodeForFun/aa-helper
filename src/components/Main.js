import DayCounter from "./day-counter";
import CallSupport from "./call-support";
import Alert from "./alert";
import Qoutes from "./qoutes";
import './main.css'

const Main = () => {

    return (
    <main>
        <DayCounter />
        <Qoutes />
        <Alert />
        <CallSupport />
    </main>
    )
}

export default Main;