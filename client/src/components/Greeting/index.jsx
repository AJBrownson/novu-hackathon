import React from "react";

const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();
  let greetings;

  if (hour < 12) {
    greetings = "morning";
  } else if (hour >= 12 && hour < 17) {
    greetings = "afternoon";
  } else {
    greetings = "evening";
  }

  return (
    <>
      <h3>Good {greetings}!</h3>
    </>
  );
};

export default Greeting;
