import { useEffect, useState, useMemo } from "react";
import Quote from './quoe';

const Quotes = () => {
    const [allQuotes, setAllQuotes] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const rsp = await fetch('/quotes.json');
            const quotes = await rsp.json();
            setAllQuotes(quotes);
        };
        fetchQuotes();
    }, []);

    const featuredQuote = useMemo(() => {
        if (allQuotes.length) {
            const randomIndex = Math.floor(Math.random() * allQuotes.length);
            return allQuotes[randomIndex];
        }
    }, [allQuotes]);


    const Quote = ({ quote }) => {

    }
    return ( 
        <div>
            <p>
                Varje gång jag känner ett sug påminner jag mig själv,
            </p>
            <p>
                "Jag känner mig lugn och trygg, lugn och trygg"
            </p>
        </div>
     );

}
 
export default Quotes;