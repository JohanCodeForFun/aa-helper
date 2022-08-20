import Quote from "./quote";

const FeaturedQuotes = ({ quote }) => {
  if (quote)
    return (
      <div>
        <Quote quote={quote} />
      </div>
    );
  return <div> qoute is not getting through</div>;
};

export default FeaturedQuotes;
