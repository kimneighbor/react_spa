import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";
import "./Calendar.css";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const weekdays = moment.weekdaysShort();
    const firstDayOfMonth = moment(selectedDate).startOf("month");
    const daysInMonth = moment(selectedDate).daysInMonth();
    const month = moment(selectedDate).format("MMMM");
    const year = moment(selectedDate).format("YYYY");
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth.day(); i++) {
        blanks.push(
            <td key={`blank-${i}`} className="calendar-day empty">
                {""}
            </td>
        );
    }
    const daysInMonthArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
        const isSelected =
            moment(selectedDate).format("YYYY-MM-DD") ===
            moment(selectedDate)
                .date(i)
                .format("YYYY-MM-DD");
        daysInMonthArray.push(
            <td
                key={`day-${i}`}
                className={classNames("calendar-day", { selected: isSelected })}
                onClick={() => setSelectedDate(moment(selectedDate).date(i))}
            >
                {i}
            </td>
        );
    }
    const totalSlots = [...blanks, ...daysInMonthArray];
    const rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });
    const renderCalendarDays = () =>
        rows.map((row, i) => (
            <tr key={`row-${i}`}>
                {row.map((cell) => {
                    return cell;
                })}
            </tr>
        ));

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className="calendar-nav">
          <span
              className="prev-month"
              onClick={() => setSelectedDate(moment(selectedDate).subtract(1, "month"))}
          >
            &lt;
          </span>
                    <span className="calendar-month">{`${month} ${year}`}</span>
                    <span
                        className="next-month"
                        onClick={() => setSelectedDate(moment(selectedDate).add(1, "month"))}
                    >
            &gt;
          </span>
                </div>
                <div className="calendar-weekdays">
                    {weekdays.map((weekday) => (
                        <div key={weekday} className="calendar-weekday">
                            {weekday}
                        </div>
                    ))}
                </div>
            </div>
            <div className="calendar-body">
                <table className="calendar-days">
                    <tbody>{renderCalendarDays()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default Calendar;
