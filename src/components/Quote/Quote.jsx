import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import quotes from "../../json/quotes.json";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotesArray = quotes.quotes;

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      return `"${quotesArray[randomIndex].text}"`;
    };

    const intervalId = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000);

    setQuote(getRandomQuote());

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-5 pt-5 pb-20 text-lg text-center font-dmserif h-36">
      <Typewriter words={[quote]} loop={1} cursor />
    </div>
  );
};

export default Quote;
