import PropTypes from "prop-types";

function QuoteItem({ name, quote }) {
  return (
    <>
      <p className="quote">{quote}</p>
      <p className="character">{name}</p>
    </>
  );
}

QuoteItem.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
export default QuoteItem;
