import React from 'react';

const ReservationCard = props => {
  return (
    <article className="ReservationCard">
      <h2 className="card-title">
        {props.details.name}
      </h2>
      <p className="card-detail">
        Date: {props.details.date}
      </p>
      <p className="card-detail">
        Time: {props.details.time}
      </p>
      <p className="card-detail">
        Number of guests: {props.details.number}
      </p>
      <button type="button" className="cancel-btn">Cancel</button>
    </article>
  );
}

export default ReservationCard;