import React from 'react';

const ReservationCard = props => {
  return (
    <article className="ReservationCard">
      <h2 className="card-title">
        {props.name}
      </h2>
      <p className="reservation-detail">
        Date: {props.date}
      </p>
      <p className="reservation-detail">
        Time: {props.time}
      </p>
      <p className="reservation-detail">
        Number of guests: {props.number}
      </p>
      <button type="button">Cancel</button>
    </article>
  );
}

export default ReservationCard;