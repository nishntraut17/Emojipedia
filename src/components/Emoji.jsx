import React from "react";

const Emoji = (props) => {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.emoji}</span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
};

export default Emoji;
