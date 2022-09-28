import { useState, useEffect } from "react";
function DealTimer(props) {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    var interval = setInterval(countDownTimer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const countDownTimer = () => {
    var eveningTime = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);

    eveningTime.setHours(19, 0, 0, 0); //midnignt
    tomorrow.setHours(19, 0, 0, 0); //midnignt

    const difference = eveningTime.getTime() - Date.now();

    // const difference = new Date("2022-09-12T17:37:56+00:00") - new Date();
    let timeLeft = {};
    // console.log("difference: ", difference);
      var _hours =  (Math.floor(difference / (1000 * 60 * 60)) < 10) ? "0"+Math.floor(difference / (1000 * 60 * 60)) : Math.floor(difference / (1000 * 60 * 60))
      var _minutes =  (Math.floor((difference / 1000 / 60) % 60) < 10) ? "0"+Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60)
      var _seconds =  (Math.floor((difference / 1000) % 60) < 10) ? "0"+Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60)
    if (difference > 0) {
      timeLeft = {
        hours: _hours,
        minutes: _minutes,
        seconds: _seconds,
      };
    }
    setTimeLeft(timeLeft);
    //return timeLeft;
  };

  return (
    <h1 className="text-gray-800 text-6xl display-block text-center">
      <span>{timeLeft.hours}</span>
      <span>:</span>
      <span>{timeLeft.minutes}</span>
      <span>:</span>
      <span>{timeLeft.seconds}</span>
    </h1>
  );
}
export default DealTimer;
