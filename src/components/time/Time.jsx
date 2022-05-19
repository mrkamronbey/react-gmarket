import React from 'react'
import DatePicker from 'sassy-datepicker';
import "./Time.css";

function Time() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <>
      <div className="c-calendar-box">
        <DatePicker onChange={onChange} />
      </div>
      <div className="c-data-box">
        <ul className="c-data-list">
          {oclock.map((elem) => (
            <li className="c-data-item">
              <div className="c-day-box">
                <span></span>
                <p>{elem.data}</p>
              </div>
              <div className="c-date-box">
                <p>{elem.oclock}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Time;

let oclock = [
  {
    id: 1,
    data: "10 October",
    oclock: "8:00 AM — 9:00 AM",
  },
  {
    id: 2,
    data: "10 October",
    oclock: "9:00 AM — 10:00 AM",
  },
  {
    id: 3,
    data: "10 October",
    oclock: "10:00 AM — 11:00 AM",
  },
  {
    id: 4,
    data: "10 October",
    oclock: "11:00 AM — 12:00 AM",
  },
  {
    id: 5,
    data: "10 October",
    oclock: "12:00 AM — 13:00 AM",
  },
  {
    id: 6,
    data: "10 October",
    oclock: "13:00 AM — 14:00 AM",
  },
  {
    id: 7,
    data: "10 October",
    oclock: "14:00 AM — 15:00 AM",
  },
  {
    id: 8,
    data: "10 October",
    oclock: "15:00 AM — 16:00 AM",
  },
  {
    id: 9,
    data: "10 October",
    oclock: "16:00 AM — 17:00 AM",
  },
];
