import { useEffect, useState, useMemo } from "react";
import DayCounter from "./day-counter";
import CallSupport from "./call-support";
import Alert from "./alert";
import FeaturedQuotes from "./featured-quotes";
import ProjectCounter from "./project-counter";
import "./main.css";

const Main = () => {
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const rsp = await fetch("/quotes.json");
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

  return (
    <main>
      <DayCounter />
      <ProjectCounter />
      <FeaturedQuotes quote={featuredQuote} />
      <Alert />
      <CallSupport />
    </main>
  );
};

export default Main;
