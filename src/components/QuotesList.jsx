import PropTypes from "prop-types";
import QuoteItem from "./QuoteItem";

function QuotestList({ friends }) {
  const htmlFriends = friends.map((friend, idx) => (
    <li key={idx} className="list">
      <QuoteItem name={friend.character} quote={friend.quote} />
    </li>
  ));

  return (
    <>
      <ul className="quotes__list">{htmlFriends}</ul>
    </>
  );
}

QuotestList.propTypes = {
  friends: PropTypes.array,
};
export default QuotestList;
