import React from "react";

const DateTime = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const date = new Date();
  const day = daysOfWeek[date.getDay()];
  const data = { hour: 'numeric', minute: 'numeric', hour12: true };
  const time = date.toLocaleString('en-US', data);
  const formattedDate = `${day}, ${time}`;

  return (
    <>
      <h3>{formattedDate}</h3>
    </>
  );
};

export default DateTime;
