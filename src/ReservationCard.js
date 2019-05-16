import React from 'react';

const ReservationCard = props => {
  return (
    <article className="ReservationCard">
      <h2 className="card-title">
        {props.details.name}
      </h2>
      <p className="reservation-detail">
        Date: {props.details.date}
      </p>
      <p className="reservation-detail">
        Time: {props.details.time}
      </p>
      <p className="reservation-detail">
        Number of guests: {props.details.number}
      </p>
      <button type="button">Cancel</button>
    </article>
  );
}

export default ReservationCard;