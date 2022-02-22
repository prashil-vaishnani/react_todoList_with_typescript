import { useState, useEffect } from "react";
import "./date.css";

export const DateTime = () => {
  var [date, setDate] = useState<Date>(new Date());
  const weekday: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    var timer: ReturnType<typeof setInterval> = setInterval(() => {
      var now: number = new Date().getTime();
      var setupTime: number = parseInt(
        localStorage.getItem("setupTime") || "{}"
      );
      if (setupTime == null) {
        localStorage.setItem("setupTime", now.toString());
      } else {
        if (now - setupTime > 24 * 60 * 60 * 1000) {
          localStorage.clear();
          localStorage.setItem("setupTime", now.toString());
        }
      }
      setDate(new Date());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="sticky-tbl">
      <table className="tbl">
        <tbody>
          <tr>
            <td className="date_row" rowSpan={2} colSpan={2}>
              {date.getDate()}
            </td>
            <td className="month_row">
              {date.toLocaleString("en-us", { month: "short" })}
            </td>
            <td className="day_row" rowSpan={2}>
              {weekday[date.getUTCDay()]}
            </td>
          </tr>
          <tr>
            <td className="year_row">{date.getFullYear()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DateTime;
